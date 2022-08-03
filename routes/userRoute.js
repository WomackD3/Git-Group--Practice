import { Router } from "express";
import {userCtrl} from '../controllers/userCtrl.js'



const router = Router();

router.post("/register", userCtrl.create);
router.post("/login", userCtrl.login);
router.delete("/users/:id", userCtrl.delete);
// router.get("/users/", userCtrl.get);
router.get("/profile", userCtrl.profile);
// router.put("/", userCtrl.fetch);
// router.put("/users/:id", userCtrl.update);
// router.put("/unfollow", userCtrl.unfollow);
// router.put("/follow", userCtrl.follow);

export default router;