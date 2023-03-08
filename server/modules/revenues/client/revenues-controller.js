const statusCode = require("../../../constants/status-code");
const revenuesService = require("../business-logic/revenues-service");

async function calculateMonthlyRevenues(req, res) {
  const { id } = req.user;
  const { month } = req.query;
  const revenues = await revenuesService.calculateMonthlyRevenues(id, month);
  res.status(statusCode.success.ok).json(revenues);
}

module.exports = {
  calculateMonthlyRevenues,
};
