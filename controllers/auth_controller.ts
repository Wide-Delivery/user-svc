import * as grpc from "@grpc/grpc-js";
import {createUser, isUserRegistered, refreshJwtTokens, signIn, signTokens} from "../services/user.service";
import {PreCreatedUser, User, UserLoginDTO} from "../models/user";
import {OAuth2Client} from "google-auth-library";
import {OAUTH_PROVIDERS} from "../constants/oauth-providers";
import UserModel from "../business-logic/schemas/user.schema";
import {getUserByEmail} from "../repositories/user.repo";
import {SignInUserInput__Output} from "../pb/com/widedelivery/auth/proto/SignInUserInput";
import {SignInUserResponse__Output} from "../pb/com/widedelivery/auth/proto/SignInUserResponse";
import {SignUpUserInput__Output} from "../pb/com/widedelivery/auth/proto/SignUpUserInput";
import {SignUpUserResponse} from "../pb/com/widedelivery/auth/proto/SignUpUserResponse";
import {RefreshTokenInput__Output} from "../pb/com/widedelivery/auth/service/RefreshTokenInput";
import {RefreshTokenResponse} from "../pb/com/widedelivery/auth/service/RefreshTokenResponse";
import {OAuthSignInInput__Output} from "../pb/com/widedelivery/auth/proto/OAuthSignInInput";



const client = new OAuth2Client();
const GOOGLE_CLIENT_ID = '';
const INTERNAL_ERROR_MESSAGE = 'Internal error. Contact with user-svc developer.';

const processErrorInController = (err: any, callback: grpc.sendUnaryData<any>) => {
    callback({
        code: err.code ? err.code : grpc.status.INTERNAL,
        message: err.message ? err.message : INTERNAL_ERROR_MESSAGE,
    });
};

export const loginController = async (call: grpc.ServerUnaryCall<SignInUserInput__Output, SignInUserResponse__Output>, callback: grpc.sendUnaryData<SignInUserResponse__Output>) => {

    try {
        const userCredentials = new UserLoginDTO(call.request);
        const {access_token, refresh_token} = await signIn(userCredentials);

        callback(null, {
            status: 'success',
            access_token: access_token,
            refresh_token: refresh_token,
        });
    } catch (err: any) {
        processErrorInController(err, callback);
    }
};

export const registerController = async (call: grpc.ServerUnaryCall<SignUpUserInput__Output,
    SignUpUserResponse>, callback: grpc.sendUnaryData<SignUpUserResponse>) => {

    const preCreatedUser = PreCreatedUser.parseFromGrpcRequest(call.request);

    if (!preCreatedUser) {
        callback({
            code: grpc.status.INVALID_ARGUMENT,
            message: 'Invalid request data.'
        })
        return;
    }

    try {
        const createdUser = await createUser(preCreatedUser);

        if (createdUser !== null) {
            callback(null, {
                user: createdUser.getGrpcModel()
            })

        }
    } catch (err: any) {
        processErrorInController(err, callback)
    }
};

export const refreshTokensHandler = async (
    call: grpc.ServerUnaryCall<RefreshTokenInput__Output, RefreshTokenResponse>,
    callback: grpc.sendUnaryData<RefreshTokenResponse>
) => {
    try {
        // Get the refresh token from cookie
        const refreshToken = call.request.refresh_token as string;

        const result = await refreshJwtTokens(refreshToken);

        // Send response
        callback(null, { access_token: result.access_token, refresh_token: result.refresh_token });
    } catch (err: any) {
        processErrorInController(err, callback);
    }
};

const verifyGoogleToken = async (token: string) => {
    return await client.verifyIdToken({
        idToken: token,
        audience: "548492017525-ur5j6tfror0g4udfc12cvmbjo5bvvnl1.apps.googleusercontent.com",  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
}

async function verifyOAuthTokenAndGetUserInfo(oauthToken: string, provider: string) {
    let ticket;
    try {
        switch (provider) {
            case OAUTH_PROVIDERS.GOOGLE:
                ticket = await verifyGoogleToken(oauthToken);
        }

        if (ticket) {
            const payload = ticket.getPayload();
            console.log('[user payload]', payload);
            if (payload) {
                const userId = payload['sub'];
                return new PreCreatedUser({
                    name: payload.name,
                    email: payload.email,
                    password: null,
                    phoneNumber: '+380990000002',
                    provider: OAUTH_PROVIDERS.GOOGLE,
                    photo: payload.picture,
                    role: 'user'
                });
            }
        }
    } catch (err) {
        console.log(err)
    }

}

export const oAuthSignInHandler = async (
    call: grpc.ServerUnaryCall<OAuthSignInInput__Output, RefreshTokenResponse>,
    callback: grpc.sendUnaryData<RefreshTokenResponse>
) => {
    const oauthToken: string = call.request.oauth_token;
    const provider: string = call.request.provider;
    try {
        const user = await verifyOAuthTokenAndGetUserInfo(oauthToken, provider);

        if (user) {
            let savedUser;
            if (await isUserRegistered(user.email)) {
                savedUser = await getUserByEmail(user.email) // user from db // todo refactor to call service not repo
            } else {
                savedUser = await createUser(user) // create new user
            }
            const { access_token, refresh_token} =  await signTokens(User.getModel(savedUser) as User);
            callback(null, {
                access_token: access_token,
                refresh_token: refresh_token
            })
        } else {
            callback({
                code: grpc.status.INVALID_ARGUMENT,
                message: 'OAuth provider cannot verify this token.'
            })
        }
    } catch (err: any) {
        processErrorInController(err, callback);
    }
}
