import {Router} from "express";
import router from "./postRoute";

const route = Router();

router.get("/", (req,res) => res.send("jeje"))