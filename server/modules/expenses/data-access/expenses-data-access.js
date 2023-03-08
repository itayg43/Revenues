const { Sequelize, Op } = require("sequelize");

const { Expense } = require("../../../db/models");

async function submitExpense(values) {
  return await Expense.create(values);
}

async function getExpensesByUidAndMonth(uid, month) {
  return await Expense.findAll({
    where: {
      [Op.and]: [
        { uid },
        Sequelize.where(
          Sequelize.fn("month", Sequelize.col("timestamp")),
          month
        ),
      ],
    },
  });
}

module.exports = {
  submitExpense,
  getExpensesByUidAndMonth,
};
