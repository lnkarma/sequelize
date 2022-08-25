import express, { Router } from "express";
import { signup } from "../controller/user.controller";

export const userRouter: Router = express.Router();

userRouter.post("/signup", signup);
