import { createClient } from 'redis';
import customConfig from "../config/default";

const redisUrl = customConfig.redisUrl;
const redisClient = createClient({
    url: redisUrl,
});

const connectRedis = async () => {
    try {
        await redisClient.connect();
        console.log('🚀 Redis client connected...');
    } catch (err: any) {
        console.error(err.message);
        process.exit(1);
    }
};

connectRedis();

redisClient.on('error', (err) => console.error(err));

export default redisClient;
