const profilesService = require("../../profiles/business-logic/profiles-service");
const expensesService = require("../../expenses/business-logic/expenses-service");
const shiftsService = require("../../shifts/business-logic/shifts-service");
const calculateExpensesData = require("./utils/calculate-expenses-data");
const calculateShiftsData = require("./utils/calculate-shifts-data");
const calculateNationalInsuranceTaxFee = require("./utils/calculate-national-insurance-tax-fee");
const calculateIncomeTaxFee = require("./utils/calculate-income-tax-fee");

async function calculateMonthlyRevenues(uid, month) {
  const [profile, expenses, shifts] = await Promise.all([
    profilesService.getProfileByUid(uid),
    expensesService.getExpensesByUidAndMonth(uid, month),
    shiftsService.getShiftsByUidAndMonth(uid, month),
  ]);
  const shiftsData = calculateShiftsData(shifts, profile);
  const nationalInsuranceTaxFee = calculateNationalInsuranceTaxFee(shiftsData);
  const incomeTaxFee = calculateIncomeTaxFee(shiftsData, profile);
  const expensesData = calculateExpensesData(expenses, profile);
  return {
    shifts: shiftsData,
    taxes: {
      nationalInsurance: nationalInsuranceTaxFee,
      incomeTax: incomeTaxFee,
    },
    expenses: expensesData,
  };
}

module.exports = {
  calculateMonthlyRevenues,
};
