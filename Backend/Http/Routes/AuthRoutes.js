import { Router } from "express";
const router = Router();

// Controllers
import { Postsignup } from "../Controllers/Signup.js";
import { Postsignin } from "../Controllers/SignIn.js";


// Routes
router.post("/signup", Postsignup);
router.post("/signin", Postsignin);

export default router;
