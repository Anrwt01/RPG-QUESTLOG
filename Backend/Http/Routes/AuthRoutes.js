import { Router } from "express";
const router = Router();

// ✅ Correct relative paths
import { Postsignup } from "../Controllers/Signup.js";
import { Avatarcreate } from "../controllers/Avatar.js";
import { Postsignin } from "../Controllers/SignIn.js";


// Routes
router.post("/signup", Postsignup);
router.post("/avatar/create", Avatarcreate);
router.post("/signin", Postsignin);

export default router;
