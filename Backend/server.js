const express = require("express");
const dotenv = require("dotenv");
dotenv.config()
const dbConnect = require("./config/db/dbConnect");


//server
const app = express()

//dbConnect
dbConnect();
console.log(process.env);
const PORT = process.env.PORT || 3000;

app.listen( PORT,console.log(`this bitch is up on ${PORT} YA HEARD!!`) )