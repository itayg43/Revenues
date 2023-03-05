const _ = require("lodash");

const statusCode = require("../../../constants/status-code");
const expensesService = require("../business-logic/expenses-service");

async function submitExpense(req, res) {
  const { id } = req.user;
  const values = _.pick(req.body, ["category", "cost", "timestamp"]);
  const expense = await expensesService.submitExpense({
    uid: id,
    ...values,
  });
  res.status(statusCode.success.created).json(expense);
}

module.exports = {
  submitExpense,
};
