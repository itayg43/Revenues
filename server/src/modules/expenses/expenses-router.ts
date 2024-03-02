import express from "express";
import asyncHandler from "express-async-handler";

import validateSchema from "../../middlewares/validate-schema";
import { createExpenseSchema } from "./expenses-schemas";
import * as expensesController from "./expenses-controller";

const expensesRouter = express.Router();

expensesRouter.post(
  "/",
  [validateSchema(createExpenseSchema)],
  asyncHandler(expensesController.addExpense)
);

export default expensesRouter;
