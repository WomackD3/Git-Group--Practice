import { Router } from "express";
import { postCtrl } from "../controllers/postCtrl.js";

const router = Router();

router.get("/posts", postCtrl.fetchAll);
router.get("/posts/:id", postCtrl.fetch);
router.post("/posts", postCtrl.create);
router.put("/posts/:id", postCtrl.update);
router.delete("/posts/:id", postCtrl.delete);

export default router;