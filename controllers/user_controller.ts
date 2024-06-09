import * as grpc from "@grpc/grpc-js";
import {verifyJwt} from "../utils/jwt";
import redisClient from "../utils/connectRedis";
import {UserFilters} from "../types/user";
import {getFilteredUsers, getUserById as getUserByIdRequest} from "../services/user.service";
import {User, UserDTO} from "../models/user";
import {Status} from "@grpc/grpc-js/build/src/constants";
import {UpdateUserInput, UpdateUserInput__Output} from "../pb/com/widedelivery/auth/proto/UpdateUserInput";
import UserModel from "../business-logic/schemas/user.schema";
import {UserResponse__Output} from "../pb/com/widedelivery/auth/proto/UserResponse";
import {GetMeInput__Output} from "../pb/com/widedelivery/auth/service/GetMeInput";
import {GetUsersWithFiltersRequest__Output} from "../pb/com/widedelivery/auth/service/GetUsersWithFiltersRequest";
import {GetUsersWithFiltersResponse__Output} from "../pb/com/widedelivery/auth/service/GetUsersWithFiltersResponse";
import {GetUserByIdInput__Output} from "../pb/com/widedelivery/auth/service/GetUserByIdInput";

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
                phone_number: '+380990000001',
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
    } else {
        callback({
            code: grpc.status.UNAUTHENTICATED,
            message: 'Please sign in again.',
        });
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
            sortDirection: requestFilters.sort_direction === 'desc' ? 'desc' : 'asc',
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

        const user: any = await getUserByIdRequest(userId);

        if (!user) {
            callback({
                code: Status.INVALID_ARGUMENT,
                message: `User not found by id ${userId}`,
            });
            return;
        }

        callback(null, { user: new UserDTO(user).getGrpcModel() });
    } catch (error) {
        console.error('Failed to get user by id:', error);
        callback({
            code: Status.INTERNAL,
            message: 'Failed to retrieve user due to internal server error'
        });
    }
}

export const updateUserHandler = async (
    call: grpc.ServerUnaryCall<UpdateUserInput, UserResponse__Output>,
    callback: grpc.sendUnaryData<UserResponse__Output>) => {
    try {
        const userId = call.request.user_id;
        const updatedUser = User.parseFromGrpcRequest(call.request);

        if (!userId || !updatedUser) {
            callback({
                code: Status.INVALID_ARGUMENT,
                message: 'User id is required, and at least one field to update',
            });
            return;
        }

        const user: any = await getUserByIdRequest(userId);

        if (!user) {
            callback({
                code: Status.INVALID_ARGUMENT,
                message: `User not found by id ${userId}`,
            });
            return;
        }

        if (updatedUser.name) {
            user.name = updatedUser.name;
        }
        if (updatedUser.email) {
            user.email = updatedUser.email;
        }
        if (updatedUser.phoneNumber) {
            user.phoneNumber = updatedUser.phoneNumber;
        }
        if (updatedUser.photo) {
            user.photo = updatedUser.photo;
        }
        if (updatedUser.role) {
            user.role = updatedUser.role;
        }

        const updatedUserModel = await user.save();

        const updatedUserDTO = new UserDTO(updatedUserModel);

        callback(null, {user: updatedUserDTO.getGrpcModel()});
    } catch (error) {
        console.error('Failed to update user with id:', call.request.user_id);
        callback({
            code: Status.INTERNAL,
            message: 'Failed to update user due to internal server error'
        });
    }
}
