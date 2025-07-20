import mongoose from "mongoose";

let isConnected: boolean = false;

export const dbConnect = async (): Promise<void> => {
    mongoose.set("strictQuery", true);
    if(isConnected) {
        console.log("Database is already connected");
        return;
    }

  try { 
    await mongoose.connect(process.env.MONGODB_URI || '' as string,{
        dbName: "ecommerce-admin"
    });
    isConnected = true;
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database connection failed", error);
  }
};

export default dbConnect;
