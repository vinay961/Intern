import dotenv from 'dotenv';
import {app} from './App.js'
import connectDB from './db/dbconnection.js';

dotenv.config({
    path:'./.env'
});

connectDB()
  .then(()=>{
    app.listen(process.env.PORT || 4000, ()=>{
        console.log(`Server is running on port number: ${process.env.PORT || 4000}`);
    })
  })
  .catch((err)=>{
    console.log("Database connection failed!!");
  })

