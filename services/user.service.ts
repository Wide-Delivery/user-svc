import bcrypt from 'bcryptjs';
import {PreCreatedUser, UserFilters} from "../types/user";
import {SignUpUserInput__Output} from "../pb/auth/SignUpUserInput";
import {getUserByEmail, getUserById as getUserByIdRepo, getUsersByFilters, saveUser} from "../repositories/user.repo";
import {User, UserDTO, UserLoginDTO} from "../models/user";
import * as grpc from '@grpc/grpc-js';
import redisClient from "../utils/connectRedis";
import customConfig from "../config/default";
import {signJwt, verifyJwt} from "../utils/jwt";
import { v4 as uuidv4 } from 'uuid';
import {RegistrationError} from "../errors/RegistrationError";
import {LoginError} from "../errors/LoginError";
import {ApplicationError} from "../errors/ApplicationError";
import UserModel from "../business-logic/schemas/user.schema";
import {ObjectId} from "mongodb";

export const createUser = async (preCreatedUser: SignUpUserInput__Output): Promise<User | null> => {
    const hashedPassword = preCreatedUser.password ? await bcrypt.hash(preCreatedUser.password, 12) : null;

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
        console.log('[user]', user)
        if (!user || !(await bcrypt.compare(userCredentials.password, user.password))) {
            console.log('[catch error in signin compare bcrypt]')
            throw new LoginError('Invalid email or password', grpc.status.INVALID_ARGUMENT)
        }

        const { access_token, refresh_token } = await signTokens(User.getModel(user) as User);

        console.log('[access tokens]', access_token, refresh_token);

        return {
            access_token, refresh_token
        }
    } catch (err: any) {
        if (err.code) {
            console.log(err)
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
        throw new ApplicationError(message, grpc.status.PERMISSION_DENIED);
    }

    // Validate the Refresh token
    const decoded = verifyJwt<{ sub: string }>(
        refreshToken,
        'refreshTokenPublicKey'
    );

    if (!decoded) {
        throw new ApplicationError(message, grpc.status.PERMISSION_DENIED);
    }

    // Check if the user has a valid session
    const session = await redisClient.get(decoded?.sub);
    if (!session) {
        throw new ApplicationError('Refresh token has expired, login again please', grpc.status.PERMISSION_DENIED);
    }

    // Check if the user exist
    const user = await getUserByIdRepo(JSON.parse(session).id);

    if (!user) {
        throw new ApplicationError('Refresh token has expired, login again please', grpc.status.PERMISSION_DENIED);
    }

    return signTokens(User.getModel(user) as User);
}

export const getFilteredUsers = async (userFilters: UserFilters) => {
    if (Object.keys(userFilters).length === 0) {
        const users = await UserModel.find({});
        return users.map(user => new UserDTO(user));
    }

    const filters: any = {};
    if (userFilters.id) {
        filters['_id'] = userFilters.id;
    }
    if (userFilters.name) {
        filters['name'] = userFilters.name;
    }
    if (userFilters.email) {
        filters['email'] = userFilters.email;
    }
    if (userFilters.phoneNumber) {
        filters['phoneNumber'] = userFilters.phoneNumber;
    }
    if (userFilters.provider) {
        filters['provider'] = userFilters.provider;
    }
    if (userFilters.role) {
        filters['role'] = userFilters.role;
    }
    if (userFilters.photo) {
        filters['photo'] = userFilters.photo;
    }
    if (userFilters.createdAtBefore || userFilters.createdAtAfter) {
        filters['createdAt'] = {};
        if (userFilters.createdAtBefore) {
            filters['createdAt']['$lte'] = userFilters.createdAtBefore;
        }
        if (userFilters.createdAtAfter) {
            filters['createdAt']['$gte'] = userFilters.createdAtAfter;
        }
    }
    const pagination: {limit: number; skip: number} = {
        limit: 20,
        skip: 0
    }
    if (userFilters.limit) {
        pagination.limit = userFilters.limit;
    }
    if (userFilters.offset) {
        pagination.skip = userFilters.offset;
    }

    const sortCriteria: any = {};

    if (!userFilters.sort) {
        userFilters.sort = 'createdAt';
    }
    if (!userFilters.sortDirection) {
        userFilters.sortDirection = 'desc';
    }

    sortCriteria[userFilters.sort] = userFilters.sortDirection === 'asc' ? 1 : -1;

    const users = await getUsersByFilters(filters, sortCriteria, pagination);

    return users.map((user: any) => new UserDTO(user));
}

export const getUserById = async (userId: string) => {
    const user = await getUserByIdRepo(new ObjectId(userId));
    return user ? new UserDTO(user) : null;
}
