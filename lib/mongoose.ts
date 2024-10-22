import mongoose from "mongoose";

let isConnected: boolean = false;

export const connectToDatabase = async () =>{
    mongoose.set("strictQuery", true);

    if(!process.env.MONGODB_URL){
        return console.log("MISSING MONGODB URL")
    }

    if(isConnected){
        return 
    } 

    try {
        mongoose.connect(process.env.MONGODB_URL,{
            dbName: process.env.MONGODB_NAME
        })
    
        isConnected = true;
    
        console.log("MongoDB is Connected")
    } catch (error) {
        console.log('MongoBD connection faild', error)
    }
}