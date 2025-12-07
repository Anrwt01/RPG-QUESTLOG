import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();


export const Habitcreate = async (req, res) => {
  try {
    const { name, type, target, unit } = req.body;

    
    const currUser = req.userId;

    // 3. Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: currUser },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found with matching ID" });
    }

    // 4. Create Habit
    const newHabit = await prisma.Habit.create({
      data: {
        userId: user.id,
        name: name,
        type: type,
        target: target,
        unit: unit,
      },
    });

    // 5. Send response
    return res.status(201).json({
      success: true,
      message: "Habit created successfully",
      habit: newHabit,
    });

  } catch (error) {
    console.error("Habit Creation Error:", error);
    return res.status(500).json({ 
      success: false, 
      error: "Internal Server Error",
      message: error.message 
    });
  }
};
