const statusCode = require("../../../constants/status-code");
const revenuesService = require("../business-logic/revenues-service");

async function calculateMonthRevenue(req, res) {
  const { id } = req.user;
  const { month } = req.query;
  const revenue = await revenuesService.calculateMonthRevenue(id, month);
  res.status(statusCode.success.ok).json(revenue);
}

module.exports = {
  calculateMonthRevenue,
};
