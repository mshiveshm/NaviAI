import mongoose from "mongoose";

const connectDB = async (): Promise<void> => {
  try {
    const mongoURI = process.env.MONGODB_URI;
    
    if (!mongoURI) {
      console.log("No MONGODB_URI provided - skipping MongoDB connection, using in-memory storage");
      return;
    }
    
    const conn = await mongoose.connect(mongoURI, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000
    });
    
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    console.log("Continuing without MongoDB - using in-memory storage");
  }
};

export default connectDB;