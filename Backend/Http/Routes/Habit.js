import { Router } from "express";
import { Habitcreate } from "../controllers/Habit.js";
import { HabitDelete } from "../controllers/HabitDel.js";
import { verifyUser } from "../Middlewares/VerifyUser.js";
import { HabitUpdateId, HabitUpd } from "../controllers/HabitUpd.js"

const router = Router();

router.post("/create", verifyUser, Habitcreate);
router.delete("/:id", verifyUser, HabitDelete);
router.get("/api/habits/:id", verifyUser, HabitUpdateId);
router.patch("/api/habits/:id", verifyUser, HabitUpd)


export default router;
