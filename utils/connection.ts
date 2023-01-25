import mongoose from "mongoose";

const connection: { isConnected?: boolean } = {};

export const connectDB = async () => {
  if (connection.isConnected) {
    return;
  }
  const conn = await mongoose
    .connect(process.env.DATABASE_URL as string)
    .catch((err: unknown) => console.log(err));
  console.log("Mongoose Connection Established");

  return conn;
};
