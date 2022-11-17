import mongoose from "mongoose";
import product from "../models/product";
import history from "../models/history";
import cronService from "../services/cronService";
import * as dotenv from 'dotenv';
import fetchNewProducts from "../services/fetchNewProducts";
dotenv.config();

const dbconnect = async() => {
      const MONGO_URL = String(process.env.MONGO_URL);
  if(MONGO_URL){
        console.log('MongoDB server not initialized');
     }
    
     await mongoose.connect(MONGO_URL).then(() => {

            console.log('sucess');

     }).catch(() => {
      console.log('error');
     })
     cronService.runCronService();
}
export default dbconnect;