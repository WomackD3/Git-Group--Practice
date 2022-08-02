import { Router } from "express";
import userRoutes from "./userRoutes.js"
import commentRoutes from "./commentRoutes.js"
import postroutes from "./postRoutes.js"



const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to our Mern API" });
});

router.use("/", userRoutes)
router.use("/", postroutes)
router.use("/", commentRoutes)
export default router;