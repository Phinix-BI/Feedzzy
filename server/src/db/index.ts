import mongoose from 'mongoose';
import config from '../config/config.js';

interface CustomError extends Error {
    message: string;
}


const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(config.mongo.url, { retryWrites: true, w: 'majority' });
        console.info(`Running on ENV = ${process.env.NODE_ENV}`);
        console.info(`Connected to mongoDB. ${connectionInstance.connection.host}`);
    } catch (error) {
        const err = error as CustomError;

        console.info(`MongoDB Connection Error: ${err.message}`);
        process.exit(1);
    }
    
};

export default connectDB;
