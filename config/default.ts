import path from 'path';
require('dotenv').config();

const customConfig: {
    port: number;
    accessTokenExpiresIn: number;
    refreshTokenExpiresIn: number;
    dbUri: string;
    accessTokenPrivateKey: string;
    accessTokenPublicKey: string;
    refreshTokenPrivateKey: string;
    refreshTokenPublicKey: string;
    redisCacheExpiresIn: number;
    mongoConnectionString: string;
} = {
    port: 8000,
    accessTokenExpiresIn: 15,
    refreshTokenExpiresIn: 120,
    redisCacheExpiresIn: 120,

    dbUri: process.env.DATABASE_URL as string,
    accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
    accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY as string,
    refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY as string,
    refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY as string,
    mongoConnectionString: process.env.MONGO_CONNECTION_STRING as string,
};

export default customConfig;

