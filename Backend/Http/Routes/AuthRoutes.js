import { Router } from "express";
const router = Router();

// ✅ Correct relative paths
import { Postsignup } from "../controllers/Signup.js";
import { Avatarcreate } from "../controllers/Avatar.js";
import {Habitcreate} from "../controllers/Habit.js"

// Routes
router.post("/signup", Postsignup);
router.post("/avatarcreate", Avatarcreate);
router.post("/habitcreate", Habitcreate )


export default router;
