import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const verifyUser = (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    if (!authHeader) {
      return res.status(401).json({ error: "Authorization header missing" });
    }

    const token = authHeader.split(" ")[1];
    if (!token) {
      return res.status(401).json({ error: "Token missing" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Store userId in req so controllers can use it
    req.userId = decoded.id;

    next(); // Continue to the actual route

  } catch (error) {
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
