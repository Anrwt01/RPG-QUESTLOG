import { Router } from "express";
import { Avatarcreate } from "../controllers/Avatar.js";
import { verifyUser } from "../middlewares/auth.js";

const router = Router();

router.post("/create", verifyUser, Avatarcreate);

export default router;
