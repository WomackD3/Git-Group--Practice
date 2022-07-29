import { Router } from "express";
import * as controllers from '../controllers/userCtrl.js'



const router = Router();

router.get("/users", controllers.getUser);
router.get("/users/:id", controllers.getUser);
router.post("/users", controllers.createUser);
router.put("/users/:id", controllers.updateUser);
router.delete("/users/:id", controllers.deleteUser);

export default router;