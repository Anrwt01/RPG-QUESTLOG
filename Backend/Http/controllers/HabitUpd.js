import dotenv from "dotenv";
dotenv.config();
// import { PrismaClient } from "@prisma/client";
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();
// const prisma = new PrismaClient();

// ================= FIND HABIT BY ID =================

export const HabitUpdateId = async (req, res) => {
  const { habitid } = req.params;
  const userId = req.user.id; // get actual user id

  try {
    const habit = await prisma.habit.findFirst({
      where: {
        id: habitid,
        userId: userId
      }
    });

    if (!habit) {
      return res.status(404).json({ success: false, message: "Habit not found" });
    }

    return res.status(200).json({
      success: true,
      userHabit: habit,
    });

  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Error fetching habit for this user"
    });
  }
};


// ================= UPDATE HABIT =================

export const HabitUpd = async (req, res) => {
  const { habitId } = req.params;
  const { name, type, target, unit, streak, totalCompleted } = req.body;

  const userId = req.user.id;

  try {
    const updatedHabit = await prisma.habit.updateMany({
      where: {
        id: habitId,
        userId: userId,
      },
      data: {
        name,
        type,
        target,
        unit,
        streak,
        totalCompleted,
        updatedAt: new Date(),
      }
    });

    if (updatedHabit.count === 0) {
      return res.status(404).json({
        success: false,
        message: "Habit not found or not owned by this user"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Habit updated successfully"
    });

  } catch (error) {
    console.error(error);
    res.status(400).json({
      success: false,
      message: "Unable to update habit"
    });
  }
};
