import express from "express";
import { register,login} from "./controller.js";
const router = express.Router();

//  auth qilish uchun route
router.post("/register",register).post("/login",login)


export default router;