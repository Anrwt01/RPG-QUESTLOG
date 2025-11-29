import express from 'express';
import jwt from 'jsonwebtoken';
// import { PrismaClient } from "@prisma/client";
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import { signupSchema } from '../Schemas/signupSchema.js';
import pkg from "@prisma/client";
const { PrismaClient } = pkg;

const prisma = new PrismaClient();

dotenv.config();
const app = express();
// const prisma = new PrismaClient();

export const Postsignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // ✅ Check if email or username already exist
    const existing = await prisma.user.findFirst({
      where: {
        OR: [
          { email: email },
          { username: username }
        ]
      }
    });

    if (existing) {
      return res.status(400).json({ error: "Email or username already exists" });
    }

    // ✅ Validate using schema
    const result = signupSchema.safeParse(req.body);
    if (!result.success) {
      return res.status(400).json({ error: "Format incorrect" });
    }

    const { password: plainPassword, username: uname, email: mail } = result.data;

    // ✅ Hash password
    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(plainPassword, salt);

    // ✅ Create user
    const newUser = await prisma.user.create({
      data: {
        username: uname,
        email: mail,
        password: passwordHash
      }
    });

    // ✅ Generate JWT
    const token = jwt.sign(
      {
        id: newUser.id,
        username: newUser.username,
        email: newUser.email
      },
      process.env.JWT_SECRET,     // must be defined in your .env
      { expiresIn: '1h' }
    );

   //   res.redirect("/avatar/create") has to done by front end

    // ✅ Return response
    return res.status(201).json({
      newUser,
      token
    });

  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({
      error: "User cannot register"
    });
  }
};
