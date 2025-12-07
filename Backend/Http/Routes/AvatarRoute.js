import { Router } from "express";
import { Avatarcreate } from "../Controllers/Avatar.js";
import { verifyUser } from "../Middlewares/VerifyUser.js";

const router = Router();

router.post("/create", verifyUser, Avatarcreate);

export default router;
