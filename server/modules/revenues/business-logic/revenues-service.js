const profilesService = require("../../profiles/business-logic/profiles-service");
const expensesService = require("../../expenses/business-logic/expenses-service");
const shiftsService = require("../../shifts/business-logic/shifts-service");
const { Revenue } = require("./entities/Revenue");
const { RevenueDtoMapper } = require("./dtos/revenue-dto-mapper");

async function calculateMonthRevenue(uid, month) {
  const [profile, shifts, expenses] = await Promise.all([
    profilesService.getProfileByUid(uid),
    shiftsService.getShiftsByUidAndMonth(uid, month),
    expensesService.getExpensesByUidAndMonth(uid, month),
  ]);
  const revenue = new Revenue(profile, shifts, expenses);
  return RevenueDtoMapper.map(revenue);
}

module.exports = {
  calculateMonthRevenue,
};
