// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import dotenv from "dotenv";
dotenv.config();

import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

export const HabitDelete = async (req, res) => {
  try {
    const { id } = req.params;

    const Curr_user = req.userId;

    const habitId = parseInt(id);

    // 2. Find Habit that belongs to this user
    const habit = await prisma.Habit.findFirst({
      where: {
        id: habitId,
        userId: Curr_user,
      },
    });

    if (!habit) {
      return res.status(404).json({
        error: "Habit not found OR does not belong to this user",
      });
    }

    // 3. Delete habit
    await prisma.habit.delete({
      where: {
        id: habitId,
      },
    });

    return res.status(200).json({
      success: true,
      message: "Habit deleted successfully",
    });

  } catch (error) {
    console.error("Delete Habit Error:", error);
    return res.status(500).json({ error: "Server error" });
  }
};
