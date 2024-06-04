import * as grpc from "@grpc/grpc-js";
import {GetMeInput__Output} from "../pb/auth/GetMeInput";
import {verifyJwt} from "../utils/jwt";
import redisClient from "../utils/connectRedis";
import {UserResponse__Output} from "../pb/auth/UserResponse";
import {GetUsersWithFiltersRequest__Output} from "../pb/auth/GetUsersWithFiltersRequest";
import {GetUsersWithFiltersResponse__Output} from "../pb/auth/GetUsersWithFiltersResponse";
import {UserFilters} from "../types/user";
import {getFilteredUsers, getUserById as getUserByIdRequest} from "../services/user.service";
import {UserDTO} from "../models/user";
import {Status} from "@grpc/grpc-js/build/src/constants";
import {GetUserByIdInput__Output} from "../pb/auth/GetUserByIdInput";

export const getMeHandler = async (
    call: grpc.ServerUnaryCall<GetMeInput__Output, UserResponse__Output>,
    callback: grpc.sendUnaryData<UserResponse__Output>
) => {
    const {access_token} = call.request;
    const decoded = verifyJwt<{sub: string}>(access_token, 'accessTokenPublicKey');

    if (!decoded) {
        callback({
            code: grpc.status.PERMISSION_DENIED,
            message: 'Access token is expired or incorrect',
        });
        return;
    }

    const userJson = await redisClient.get(decoded.sub);
    if (userJson) {
        const user = JSON.parse(userJson);

        callback(null, {
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                phoneNumber: '+380990000001',
                photo: user.photo,
                provider: user.provider,
                role: user.role,
                createdAt: {
                    seconds: Math.round(user.createdAt / 1000).toString(),
                    nanos: 0
                },
                updatedAt: {
                    seconds: Math.round(user.updatedAt / 1000).toString(),
                    nanos: 0,
                }
            },
        })

    }
    // if (!user) {
    //     const userFromDb = await mongoclient get user
    // }
}

export const getUsersWithFiltersHandler = async (
    call: grpc.ServerUnaryCall<GetUsersWithFiltersRequest__Output, GetUsersWithFiltersResponse__Output>,
    callback: grpc.sendUnaryData<GetUsersWithFiltersResponse__Output>) => {
    try {
        // Extract filters from the call request and adapt them to your existing function requirements
        const requestFilters = call.request;
        const filters: UserFilters = {
            id: requestFilters.id,
            name: requestFilters.name,
            email: requestFilters.email,
            phoneNumber: requestFilters.phone_number,
            provider: requestFilters.provider,
            role: requestFilters.role,
            photo: requestFilters.photo,
            createdAtBefore: requestFilters.created_at_before ? new Date(requestFilters.created_at_before) : undefined,
            createdAtAfter: requestFilters.created_at_after ? new Date(requestFilters.created_at_after) : undefined,
            sort: requestFilters.sort,
            limit: requestFilters.limit || 20,
            offset: requestFilters.offset || 0,
            sortDirection: requestFilters.sortDirection === 'desc' ? 'desc' : 'asc',
        };

        // Retrieve filtered users
        const users: UserDTO[] = await getFilteredUsers(filters);

        // Convert UserModel to a protobuf compatible format
        const responseUsers = users.map(user => user.getGrpcModel());

        // Send the response
        callback(null, { users: responseUsers });
    } catch (error) {
        console.error('Failed to get users with filters:', error);
        callback({
            code: Status.INTERNAL,
            message: 'Failed to retrieve users due to internal server error'
        });
    }
}

export const getUserByIdHandler = async (
    call: grpc.ServerUnaryCall<GetUserByIdInput__Output, UserResponse__Output>,
    callback: grpc.sendUnaryData<UserResponse__Output>) => {
    try {
        const userId = call.request.user_id;

        const user: UserDTO | null = await getUserByIdRequest(userId);

        if (!user) {
            callback({
                code: Status.INVALID_ARGUMENT,
                message: `User not found by id ${userId}`,
            });
            return;
        }

        callback(null, { user: user.getGrpcModel() });
    } catch (error) {
        console.error('Failed to get user by id:', error);
        callback({
            code: Status.INTERNAL,
            message: 'Failed to retrieve user due to internal server error'
        });
    }
}
