import { Router } from "express";
import userRoutes from "./userRoute.js"

const router = Router();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to our Mern API" });
});

router.use("/", userRoutes)
export default router;