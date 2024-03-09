import grpc from "@grpc/grpc-js";
import {GetMeInput__Output} from "../pb/auth/GetMeInput";
import {User__Output} from "../pb/auth/User";
import {verifyJwt} from "../utils/jwt";
import redisClient from "../utils/connectRedis";
import {UserResponse__Output} from "../pb/auth/UserResponse";

const getMeHandler = async (
    call: grpc.ServerUnaryCall<GetMeInput__Output, UserResponse__Output>,
    callback: grpc.sendUnaryData<UserResponse__Output>
) => {
    const {access_token} = call.request;
    const decoded = verifyJwt<{sub: string}>(access_token, 'accessTokenPublicKey');

    if (!decoded) {
        return {
            code: grpc.status.PERMISSION_DENIED,
            message: 'Access token is expired or incorrect',
        };
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


module.exports = {
    getMeHandler
}
