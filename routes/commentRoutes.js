import { Router } from "express";
import { CommentCtrl } from "../controllers/commentCtrl.js";
const router = Router();

router.get("/comments", CommentCtrl.fetch);
router.post("/posts/:post_id/comments", CommentCtrl.create);
router.put("/comment/:id", CommentCtrl.update);
router.delete("/comment/:id", CommentCtrl.delete);

export default router;