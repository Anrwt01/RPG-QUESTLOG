import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { signinSchema } from "../Schemas/signinSchema.js";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const Postsignin = async (req, res) => {
  const result = signinSchema.safeParse(req.body);
    if (!result.success) {
        return res.status(401).json({
            error: JSON.parse(result.error)
        })
    }

  try {
    const { email, password } = req.body;

    const User = await prisma.user.findUnique({
      where: { email },
    });

    if (!User) {
      return res.status(400).json({ error: "User not exists" });
    }

    bcrypt.compare(password, User.password).then(function (result) {
       if(!result) return res.status(400).json({error : "Password is incorrect"})
       
    });

    const timestamp = Date.now();
    const dateObject = new Date(timestamp);
    User.lastLogin = dateObject.toLocaleString();
  
    const token = jwt.sign(
      {
        id: User.id,
        username: User.username,
        email: User.email,
      },
      process.env.JWT_SECRET, // must be defined in your .env
      { expiresIn: "24h" }
    );


    return res.status(201).json({
      User,
      token,
    });

  } catch (err) {
    console.error("Signin error:", err);
    return res.status(500).json({
      error: "User cannot login",
    });
   }
};
