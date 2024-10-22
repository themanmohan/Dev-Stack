"use server"
import { connectToDatabase } from "../mongoose";

export const createQustion = async() =>{
    try {
        connectToDatabase();
    } catch (error) {
        console.log(error)
    }
}