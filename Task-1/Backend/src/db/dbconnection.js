import mongoose from "mongoose";
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async() => {
    try {
        const connection = await mongoose.connect(process.env.DB_URI);
        console.log(`\n MongoDB connected || DB HOST:${connection.connection.host}`);
    } catch (error) {
        console.log( "Get error while connecting to database:" ,error);
        process.exit(1);
    }
}

export default connectDB;