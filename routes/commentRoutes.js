import { Router } from "express";
import { commentCtrl } from "../controllers/commentCtrl";
const router = Router();

router.get("/comments", commentCtrl.fetch);
router.post("/posts/:post_id/comments", commentCtrl.create);
router.put("/comment/:id", commentCtrl.update);
router.delete("/comment/:id", commentCtrl.delete);

export default router;