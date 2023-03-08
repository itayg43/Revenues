const expensesDataAccess = require("../data-access/expenses-data-access");

async function submitExpense(values) {
  return await expensesDataAccess.submitExpense(values);
}

async function getExpensesByUidAndMonth(uid, month) {
  return await expensesDataAccess.getExpensesByUidAndMonth(uid, month);
}

module.exports = {
  submitExpense,
  getExpensesByUidAndMonth,
};
