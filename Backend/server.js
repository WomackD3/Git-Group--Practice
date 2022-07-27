const express = require("express");

//server
const app = express()

const PORT = process.env.PORT || 3000;

app.listen( PORT,console.log(`this bitch is up on ${PORT} YA HEARD!!`) )