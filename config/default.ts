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
    redisUrl: string,
} = {
    accessTokenExpiresIn: 60,
    accessTokenPrivateKey: process.env.ACCESS_TOKEN_PRIVATE_KEY as string,
    accessTokenPublicKey: process.env.ACCESS_TOKEN_PUBLIC_KEY as string,
    dbUri: process.env.DATABASE_URL as string,

    mongoConnectionString: process.env.MONGO_CONNECTION_STRING as string,
    port: process.env.USER_SERVICE_PORT as unknown as number,
    redisCacheExpiresIn: 180,
    refreshTokenExpiresIn: 180,
    refreshTokenPrivateKey: process.env.REFRESH_TOKEN_PRIVATE_KEY as string,
    refreshTokenPublicKey: process.env.REFRESH_TOKEN_PUBLIC_KEY as string,
    redisUrl: process.env.REDIS_URL as string,
};

export default customConfig;

