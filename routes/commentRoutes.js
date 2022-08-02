import { Router } from "express";
import { commentCtrl } from "../controllers/commentCtrl";
const router = Router();

router.delete("/comment/:id", commentCtrl.delete);
router.put("/", commentCtrl.fetch);
router.put("/comment/:id", commentCtrl.update);
router.post("/comment", commentCtrl.create);

export default router;