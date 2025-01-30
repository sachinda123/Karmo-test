import express, { Request, Response, Application } from "express";
import "dotenv/config";
import { readFile } from "./common/functions";

const app: Application = express();
require("dotenv").config();

const port = process.env.APP_PORT || 3000;

app.get("/", async (req: Request, res: Response) => {
  try {
    const { list1, list2 } = await readFile(process.env.INPUT_FILE || "./input.txt");
    const sumOfDifferences = list1.reduce((sum, num, index) => sum + Math.abs(num - list2[index]), 0);
    res.status(200).json({ sumOfDifferences });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`Server is Fire at https://localhost:${port}`);
});

export { app };
