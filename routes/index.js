import { Router } from "express";
import userRoutes from "./userRoute.js"
import commentRoutes from "./commentRoute.js "
import postRoutes from "./postRoute.js "



const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Welcome to our Mern API" });
});

router.use("/", userRoutes)
router.use("/", commentRoutes)
router.use("/", postRoutes)
export default router;