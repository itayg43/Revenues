import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { CreateExpenseInput } from "./expenses-schemas";
import * as expensesService from "./expenses-service";

export const createExpense = async (
  req: Request<{}, {}, CreateExpenseInput>,
  res: Response
) => {
  const expense = await expensesService.createExpense(req.body);
  res.status(StatusCodes.CREATED).json(expense);
};
