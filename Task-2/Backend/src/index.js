import { app } from "./app.js";
import dotenv from 'dotenv'

import connectDB from "./db/dbconnection.js";

dotenv.config({
    path:'./.env'
})

connectDB()
 .then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server is running on PORT: ${process.env.PORT}`);
    })
 })
 .catch((err)=>{
    console.log("Database connection failed.");
 })

