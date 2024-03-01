import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes";

import { AddExpenseInput } from "./expenses-schemas";
import expensesService from "./expenses-service";

const addExpense = async (
  req: Request<{}, {}, AddExpenseInput["body"]>,
  res: Response
) => {
  const expense = await expensesService.addExpense(req.body);
  res.status(StatusCodes.CREATED).json(expense);
};

export default {
  addExpense,
};
