import express from "express";
import asyncHandler from "express-async-handler";

import validateSchema from "../../middlewares/validate-schema";
import { addExpenseSchema } from "./expenses-schemas";
import expensesController from "./expenses-controller";

const expensesRouter = express.Router();

expensesRouter.post(
  "/",
  [validateSchema(addExpenseSchema)],
  asyncHandler(expensesController.addExpense)
);

export default expensesRouter;
