const profilesService = require("../../profiles/business-logic/profiles-service");
const expensesService = require("../../expenses/business-logic/expenses-service");
const shiftsService = require("../../shifts/business-logic/shifts-service");
const calculateExpensesData = require("./utils/calculate-expenses-data");
const calculateShiftsData = require("./utils/calculate-shifts-data");

async function calculateMonthlyRevenues(uid, month) {
  const [profile, expenses, shifts] = await Promise.all([
    profilesService.getProfileByUid(uid),
    expensesService.getExpensesByUidAndMonth(uid, month),
    shiftsService.getShiftsByUidAndMonth(uid, month),
  ]);
  const expensesData = calculateExpensesData(expenses, profile);
  const shiftsData = calculateShiftsData(shifts);
}

module.exports = {
  calculateMonthlyRevenues,
};
