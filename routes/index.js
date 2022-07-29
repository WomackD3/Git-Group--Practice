import { Router } from "express";

const router = Router();

app.get("/", (req, res) => {
  res.json({ message: "Welcome to our Mern API" });
});

router.use("/", userRoutes)
export default router;