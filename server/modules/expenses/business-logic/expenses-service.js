const expensesDataAccess = require("../data-access/expenses-data-access");

async function submitExpense(values) {
  return await expensesDataAccess.submitExpense(values);
}

module.exports = {
  submitExpense,
};
