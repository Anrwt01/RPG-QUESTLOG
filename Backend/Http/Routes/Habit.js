import { Router } from "express";
import { Habitcreate } from "../Controllers/Habit.js";
import { HabitDelete } from "../Controllers/HabitDel.js";
import { verifyUser } from "../Middlewares/VerifyUser.js";
import { HabitGetAll, HabitUpdateId, HabitUpd } from "../Controllers/HabitUpd.js";

const router = Router();

router.post("/create", verifyUser, Habitcreate);
router.get("/", verifyUser, HabitGetAll);
router.get("/:id", verifyUser, HabitUpdateId);
router.patch("/:id", verifyUser, HabitUpd);
router.delete("/:id", verifyUser, HabitDelete);

export default router;
