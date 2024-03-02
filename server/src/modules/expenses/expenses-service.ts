import * as expensesDataAccess from "./expenses-data-access";
import { CreateExpenseInput } from "./expenses-schemas";

export const createExpense = async (input: CreateExpenseInput) => {
  const { type, cost } = input;
  return await expensesDataAccess.createExpense(type, cost, 1);
};
