import bcrypt from 'bcryptjs';
import {PreCreatedUser} from "../types/user";
import {SignUpUserInput__Output} from "../pb/auth/SignUpUserInput";
import {getUserByEmail, getUserById, saveUser} from "../repositories/User_repo";
import {User, UserDTO, UserLoginDTO} from "../models/user";
import {SignInUserResponse} from "../pb/auth/SignInUserResponse";
import * as grpc from '@grpc/grpc-js';
import redisClient from "../utils/connectRedis";
import customConfig from "../config/default";
import {signJwt, verifyJwt} from "../utils/jwt";
import { v4 as uuidv4 } from 'uuid';
import {RegistrationError} from "../errors/RegistrationError";
import {LoginError} from "../errors/LoginError";
import {ApplicationError} from "../errors/ApplicationError";
import UserModel from "../business-logic/schemas/user.schema";

export const createUser = async (preCreatedUser: SignUpUserInput__Output): Promise<User | null> => {
    const hashedPassword = await bcrypt.hash(preCreatedUser.password, 12);

    // validate email, phoneNmer
    //
    // todo

    const user: PreCreatedUser = {
        email: preCreatedUser.email.toLowerCase(),
        name: preCreatedUser.name,
        password: hashedPassword,
        phoneNumber: preCreatedUser.phoneNumber,
        provider: preCreatedUser.provider || 'local',
    };

    try {
        const createdUser = await saveUser(user);
        return User.getModel(createdUser);
    } catch (err: any) {
        console.error(err);
        if (err.code === 11000) {
            throw new RegistrationError(`Email ${user.email} is already used.`, grpc.status.ALREADY_EXISTS)
        }
        throw new ApplicationError('Cannot save the user: ' + err.message);
    }
}

export const signIn = async (userCredentials: UserLoginDTO): Promise<{ access_token: string, refresh_token: string}> => {
    try {
        const user = await getUserByEmail(userCredentials.email);
        if (!user || !(await bcrypt.compare(userCredentials.password, user.password))) {
            throw new LoginError('Invalid email or password', grpc.status.INVALID_ARGUMENT)
        }

        const { access_token, refresh_token } = await signTokens(User.getModel(user) as User);

        return {
            access_token, refresh_token
        }
    } catch (err: any) {
        if (err.code) {
            throw new LoginError('Invalid email or password', grpc.status.INVALID_ARGUMENT)
        }
        throw new ApplicationError('Login internal error: ' + err.message)
    }
}

export const signTokens = async (user: User) => {

    const randomUUID = uuidv4();
    // 1. Create Session
    await redisClient.set(randomUUID, JSON.stringify(user), {
        EX: customConfig.redisCacheExpiresIn * 60,
    });

    // 2. Create Access and Refresh tokens
    const access_token = signJwt({ sub: randomUUID }, 'accessTokenPrivateKey', {
        expiresIn: `${customConfig.accessTokenExpiresIn}m`,
    });

    const refresh_token = signJwt({ sub: randomUUID }, 'refreshTokenPrivateKey', {
        expiresIn: `${customConfig.refreshTokenExpiresIn}m`,
    });

    return { access_token, refresh_token };
};

export const isUserRegistered = async (email: string) => {
    const user = await getUserByEmail(email);
    return !!user;
}

export const refreshJwtTokens = async (refreshToken: string) => {
    const message = 'Could not refresh access token';
    if (!refreshToken) {
        return {
            code: grpc.status.PERMISSION_DENIED,
            message,
        };
    }

    // Validate the Refresh token
    const decoded = verifyJwt<{ sub: string }>(
        refreshToken,
        'refreshTokenPublicKey'
    );

    if (!decoded) {
        return {
            code: grpc.status.PERMISSION_DENIED,
            message,
        };
    }

    // Check if the user has a valid session
    const session = await redisClient.get(decoded?.sub);
    if (!session) {
        return {
            code: grpc.status.PERMISSION_DENIED,
            message,
        };
    }

    // Check if the user exist
    const user = await getUserById(JSON.parse(session).id);

    if (!user) {
        return {
            code: grpc.status.PERMISSION_DENIED,
            message,
        };
    }

    // Sign new access token
    const access_token = signJwt({ sub: user.id }, 'accessTokenPrivateKey', {
        expiresIn: `${customConfig.accessTokenExpiresIn}m`,
    });

    const refresh_token = signJwt({ sub: user.id }, 'refreshTokenPrivateKey', {
        expiresIn: `${customConfig.refreshTokenExpiresIn}m`,
    });

    return {
        access_token,
        refresh_token,
    }
}
