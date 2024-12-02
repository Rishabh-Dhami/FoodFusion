import mongoose from "mongoose";
import 'dotenv/config';
import express from 'express';

const app = express();

const connectDB = async () => {
    try {
     let db = await mongoose.connect(process.env.MONGO_URI);
      if(db){
        console.log('MongoDB connected...');
        app.listen(process.env.PORT, () => {
            console.log(`server is running at ${process.env.PORT}`);
            
        })
      }
    } catch (err) {
      console.error('Error connecting to MongoDB:', err.message);
      process.exit(1); // Exit process on failure
    }
  };


  export {connectDB, app}