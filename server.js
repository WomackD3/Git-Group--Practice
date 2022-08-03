import express from "express";
import dotenv from "dotenv"
import dbConnect from "./config/db/dbConnect.js"
import cors from "cors"
import routes from "./routes/index.js"
import logger from "morgan";
dotenv.config()

//server
const app = express()
const PORT = process.env.PORT || 8080;

//Mogran
app.use(logger("dev"));

//middleware
app.use(express.json());
//cors
app.use(cors());

//Users route
app.use("/api", routes);

//dbConnect
dbConnect.on("connected", () => {
  app.listen(PORT, () => {
    console.log(`this bitch is up on ${PORT} YA HEARD!!`)
  })
});
