import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Avatarcreate = async (req, res) => {
  try {
    const { avatarClass, gear } = req.body;

    // 1. Get Authorization header
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header missing" });
    }

    // 2. Extract token
    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token missing" });
    }

    // 3. Verify JWT
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.id;

    // 4. Find user
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    // 5. Create avatar
    const userAvatar = await prisma.avatar.create({
      data: {
        userId: user.id,
        class: avatarClass,
        gear: gear,
      },
    });

    // 6. Response
    return res.status(201).json({
      success: true,
      message: "Avatar created successfully",
      avatar: userAvatar,
    });

  } catch (error) {
    console.error("Avatar creation error:", error);
    return res.status(500).json({ error: "Failed to create avatar" });
  }
};
