import express, { Request, Response } from "express";
import dotenv from "dotenv";
import { connect } from "./sequelize";
import { userRouter } from "./routes/user.route";

dotenv.config();

const app = express();
app.use(express.json());
const port = process.env.PORT;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.use(userRouter);

connect()
  .then(() => {
    app.listen(port, () => {
      console.log(`[server]: Server is running at https://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.log(`There was an error: ${err.message}`);
  });
