import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import AuthRoutes from "./Http/Routes/AuthRoutes.js";

const app = express();
import cors from 'cors';
dotenv.config()


app.use(express.urlencoded({extended:true}));
app.use(express.json());
 app.use(cors({
    origin: process.env.CORS_ORIGIN || "http://localhost:5000"

}));


app.use("/api/auth", AuthRoutes)
app.use("/api/avatar", AuthRoutes )
app.use("/api/habit", AuthRoutes)

const server = http.createServer(app);

server.listen(5000, () => {
  console.log("");
});