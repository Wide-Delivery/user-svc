import {SignInUserInput__Output} from "../pb/auth/SignInUserInput";
import {SignUpUserResponse} from "../pb/auth/SignUpUserResponse";
import grpc, {sendUnaryData} from "@grpc/grpc-js";
import {createUser, isUserRegistered, refreshJwtTokens, signIn, signTokens} from "../services/user.service";
import {PreCreatedUser, User, UserLoginDTO} from "../models/user";
import {SignUpUserInput__Output} from "../pb/auth/SignUpUserInput";
import {SignInUserResponse__Output} from "../pb/auth/SignInUserResponse";
import {RefreshTokenInput__Output} from "../pb/auth/RefreshTokenInput";
import {RefreshTokenResponse} from "../pb/auth/RefreshTokenResponse";
import {OAuthSignInInput__Output} from "../pb/auth/OAuthSignInInput";
import {OAuth2Client} from "google-auth-library";
import {OAUTH_PROVIDERS} from "../constants/oauth-providers";
import UserModel from "../business-logic/schemas/user.schema";
import {getUserByEmail} from "../repositories/User_repo";

const client = new OAuth2Client();
const GOOGLE_CLIENT_ID = '';
const INTERNAL_ERROR_MESSAGE = 'Internal error. Contact with user-svc developer.';

const processErrorInController = (err: any, callback: sendUnaryData<any>) => {
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

    const preCreatedUser = new PreCreatedUser(call.request);

    try {
        const createdUser = await createUser(preCreatedUser);
        // const id = new ObjectId('65dfaa40880dacc6f50152a6');
        // const result = await deleteUserById(id);
        if (createdUser !== null) {
            callback(null, {
                user: {
                    id: createdUser.id,
                    name: createdUser.name,
                    email: createdUser.email,
                    phoneNumber: createdUser.phoneNumber,
                    provider: createdUser.provider,
                    role: 'user',
                    createdAt: {
                        seconds: createdUser.createdAt.getSeconds()
                    },
                    updatedAt: {
                        seconds: createdUser.updatedAt.getSeconds()
                    }
                },
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

        if (result.code) {
            callback({
                code: result.code,
                message: result.message,
            });
        }

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
        // If request specified a G Suite domain:
        // const domain = payload['hd'];
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
