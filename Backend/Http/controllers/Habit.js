import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Habitcreate = async (req, res) => {
  try {
    const { habitName, habitType, targetValue, unitName } = req.body;

    // 1. Get JWT from header
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Authorization token missing" });
    }

    // 2. Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const currUser = decoded.id;

    // 3. Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: currUser },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found with matching ID" });
    }

    // 4. Create Habit
    const newHabit = await prisma.habit.create({
      data: {
        userId: user.id,
        name: habitName,
        type: habitType,
        target: targetValue,
        unit: unitName,
      },
    });

    // 5. Send response
    return res.status(201).json({
      success: true,
      message: "Habit created successfully",
      habit: newHabit,
      token,
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
