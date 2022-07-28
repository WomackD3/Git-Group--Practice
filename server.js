import express from "express";
import dotenv from "dotenv"
import dbConnect from "./config/db/dbConnect.js"
// const dbConnect = require("./config/db/dbConnect");

dotenv.config()

//server
const app = express()

//dbConnect
dbConnect();
console.log(process.env);
const PORT = process.env.PORT || 3000;

app.listen( PORT,console.log(`this bitch is up on ${PORT} YA HEARD!!`) )