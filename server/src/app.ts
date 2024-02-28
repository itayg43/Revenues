import express, { Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { StatusCodes } from "http-status-codes";

const app = express();

app.use(helmet());
app.use(cors());
app.use(compression());
app.use(express.json());

app.get("/health", (_: Request, res: Response) => {
  res.sendStatus(StatusCodes.OK);
});

export default app;
