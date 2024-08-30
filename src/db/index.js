import mongoose from "mongoose";
import {DB_NAME} from "../constants.js";


const connectDB = async( ) =>{
  try {
   const connectionInstence =  await mongoose.connect(`${process.env
    .MONGODB_URI}/ ${DB_NAME}`)

    console.log(`mongodb connected !! DB HOST :${connectionInstence.connection?.host || 'Not available'}`);
  } catch (error) {
     console.log("MongoBd connection FAILD ", error);
     process.exit(1)
  }
}

export default connectDB