const _ = require("lodash");

const profilesService = require("../../profiles/business-logic/profiles-service");
const expensesService = require("../../expenses/business-logic/expenses-service");
const shiftsService = require("../../shifts/business-logic/shifts-service");
const sumShiftsData = require("./utils/sum-shifts-data");
const calculateNationalInsuranceTaxFee = require("./utils/calculate-national-insurance-tax-fee");
const calculateIncomeTaxFee = require("./utils/calculate-income-tax-fee");
const sumExpensesData = require("./utils/sum-expenses-data");

async function calculateMonthRevenue(uid, month) {
  const [profile, expenses, shifts] = await Promise.all([
    profilesService.getProfileByUid(uid),
    expensesService.getExpensesByUidAndMonth(uid, month),
    shiftsService.getShiftsByUidAndMonth(uid, month),
  ]);
  const shiftsData = sumShiftsData(shifts);
  const nationalInsurance = calculateNationalInsuranceTaxFee(
    shiftsData.grossEarningsExclCashTips
  );
  const incomeTax = calculateIncomeTaxFee(
    shiftsData.grossEarningsExclCashTips,
    profile.creditPoints
  );
  const expensesData = sumExpensesData(expenses, profile.insurancePayment);
  const netEarnings =
    shiftsData.grossEarnings -
    nationalInsurance -
    incomeTax -
    profile.insurancePayment -
    expensesData.total;
  return {
    shifts: _.omit(shiftsData, [
      "vat",
      "commission",
      "grossEarnings",
      "grossEarningsExclCashTips",
    ]),
    vat: shiftsData.vat,
    commission: shiftsData.commission,
    taxes: {
      nationalInsurance,
      incomeTax,
    },
    expenses: _.omit(expensesData, ["total"]),
    net: netEarnings,
  };
}

module.exports = {
  calculateMonthRevenue,
};
