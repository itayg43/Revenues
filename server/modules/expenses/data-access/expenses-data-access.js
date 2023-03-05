const { Expense } = require("../../../db/models");

async function submitExpense(values) {
  return await Expense.create(values);
}

module.exports = {
  submitExpense,
};
