import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/cyber-api"

mongoose.set("returnOriginal", false);

mongoose.connect(MONGODB_URL).catch((err) => {
  console.log(err);
})

mongoose.connection.on("disconnected", () => {
  console.log('MongoDB disconnected');
})

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

export default mongoose.connection;