import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import authRoutes from "./Http/Routes/AuthRoutes.js";
import avatarRoutes from "./Http/Routes/AvatarRoute.js";
import habitRoutes from "./Http/Routes/Habit.js";
const PORT = 5000
const app = express();
import cors from 'cors';
dotenv.config()


app.use(express.urlencoded({extended:true}));
app.use(express.json());
 app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5000"

}));

app.use("/api/auth", authRoutes);
app.use("/api/avatar", avatarRoutes);
app.use("/api/habit", habitRoutes);


const server = http.createServer(app);

server.listen(5000, () => {
  console.log("http://localhost:"+PORT);
});