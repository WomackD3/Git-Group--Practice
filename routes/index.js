import { Router } from "express";
import userRoutes from "./userRoutes.js"
import commentRoutes from "./commentRoutes.js"
import postRoutes from "./postRoutes.js"
import post from "../model/post.js";



const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to our Mern API" });
});

router.use("/", userRoutes)
router.use("/", postRoutes)
router.use("/", commentRoutes)
export default router;

//post routes 