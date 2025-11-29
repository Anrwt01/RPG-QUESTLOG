import { Router } from "express";
const router = Router();

// Controllers
import { Postsignup } from "../controllers/Signup.js";
import { Postsignin } from "../controllers/SignIn.js";


// Routes
router.post("/signup", Postsignup);
router.post("/signin", Postsignin);

export default router;
