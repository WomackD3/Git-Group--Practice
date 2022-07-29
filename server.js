import express from "express";
import dotenv from "dotenv"
import dbConnect from "./config/db/dbConnect.js"
import cors from "cors"
import routes from "./routes/index.js"
dotenv.config()

//server
const app = express()

//Users route
app.use("/api", routes);

//cors
app.use(cors());

//middleware
app.use(express.json());



//dbConnect
dbConnect();
console.log(process.env);
const PORT = process.env.PORT || 3000;

app.listen( PORT,console.log(`this bitch is up on ${PORT} YA HEARD!!`) )