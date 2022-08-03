import mongoose from "mongoose";

const MONGODB_URL = process.env.MONGODB_URL || "mongodb://127.0.0.1:27017/cyber-api"

let mongooseConfig = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let connectionString = "mongodb://127.0.0.1:27017/cyber-api"
let db = mongoose.connection

mongoose.connect(connectionString, mongooseConfig);
  
mongoose.set("returnOriginal", false);

mongoose.connect(MONGODB_URL).catch((err) => {
  console.log(err);
})

mongoose.connection.on("error", (err) => {
  console.log(`MongoDB connection error: ${err}`);
});

mongoose.connection.on("disconnected", () => {
  console.log('MongoDB disconnected');
})

export default db;