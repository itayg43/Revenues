import expensesDataAccess from "./expenses-data-access";
import { AddExpenseInput } from "./expenses-schemas";

const addExpense = async (input: AddExpenseInput["body"]) => {
  const { type, cost } = input;
  return await expensesDataAccess.addExpense(type, cost, 1);
};

export default {
  addExpense,
};
