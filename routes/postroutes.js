import { Router } from "express";
import { postCtrl } from "../controllers/postCtrl";

const router = Router();

router.delete("/post/:id", postCtrl.delete);
router.put("/", postCtrl.fetchAll);
router.put("/:id", postCtrl.fetch);
router.put("/post/:id", postCtrl.update);
router.post("/post", posttCtrl.create);

export default router;