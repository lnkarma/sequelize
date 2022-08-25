import { Request, Response } from "express";
import { createUser } from "../services/user.service";

export const signup = async (req: Request, res: Response) => {
  console.log("signup", req.body);
  try {
    const user = await createUser(req.body);
    res.send(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).send(error.message);
    }
  }
};
