import { Router } from "express";
import * as controllers from "../controllers/houses.js";

const router = Router();

router.get("/post", controllers.getPosts);
router.get("/post/:id", controllers.getPost);
router.post("/post", controllers.createPost);
router.put("/post/:id", controllers.updatePost);
router.delete("/post/:id", controllers.deletePost);

export default router;
