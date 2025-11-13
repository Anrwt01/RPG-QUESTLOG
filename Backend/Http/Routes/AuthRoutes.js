import { Router } from "express";
const router = Router(); 
import {Postsignup}from "./Http/controllers/Signin.js"


router.post("/signup", Postsignup)




export default router;