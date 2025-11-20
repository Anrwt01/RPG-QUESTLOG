import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import AuthRoutes from "./Http/Routes/AuthRoutes.js";
const PORT = 5000
const app = express();
import cors from 'cors';
dotenv.config()


app.use(express.urlencoded({extended:true}));
app.use(express.json());
 app.use(cors({
    origin: process.env.CORS_ORIGIN

}));


app.use("/api/auth", AuthRoutes)
app.use("/api/avatar", AuthRoutes )


const server = http.createServer(app);

server.listen(5000, () => {
  console.log("Server is running on PORT" , PORT);
});