import express from 'express';
import dotenv from 'dotenv';
import http from 'http';
import env from './env.js'
const app = express();
import cors from 'cors';
dotenv.config()


app.use(express.urlencoded({extended:true}));
app.use(express.json);
 app.use(cors({
    origin: env.CORS_ORIGIN
}));


app.use("/api/auth", authrouters)


const server = http.createServer(app);

server.listen(4444)