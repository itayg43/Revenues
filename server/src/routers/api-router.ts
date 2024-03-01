import express from "express";

import expensesRouter from "../modules/expenses/expenses-router";

const apiRouter = express.Router();

apiRouter.use("/expenses", expensesRouter);

export default apiRouter;
