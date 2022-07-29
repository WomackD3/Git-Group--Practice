import { Router } from "express";
import * as controllers from "../controllers/postCtrl.js";

const router = Router();
router.get("/posts", controllers.getPosts);
router.get("posts/:id", controllers.getPost)