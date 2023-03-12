const calculateNationalInsurance = require("../utils/calculate-national-insurance-tax");
const calculateIncome = require("../utils/calculate-income-tax");

class Revenue {
  shifts = {
    deliveries: 0,
    creditTips: 0,
    cashTips: 0,
  };

  vat = 0;
  commission = 0;

  taxes = {
    nationalInsurance: 0,
    income: 0,
  };

  expenses = {
    insurance: 0,
    fuel: 0,
    maintenance: 0,
  };

  gross = 0;
  grossExclCashTips = 0;

  net = 0;

  constructor(profile, shifts, expenses) {
    this.prepareShiftsSummary(shifts);
    this.prepareExpensesSummary(expenses, profile.insurancePayment);
    this.calculateVatAndCommission(profile.commissionRate);
    this.calculateGrossEarnings();
    this.grossExclCashTips = this.gross - this.shifts.cashTips;
    this.calculateTaxes(profile.creditPoints);
    this.calculateNet();
  }

  prepareShiftsSummary(shifts) {
    shifts.forEach((currShift) => {
      this.shifts.deliveries += currShift.deliveries;
      this.shifts.creditTips += currShift.creditTips;
      this.shifts.cashTips += currShift.cashTips;
    });
  }

  prepareExpensesSummary(expenses, insurance) {
    this.expenses.insurance = insurance;
    expenses.forEach((currExpense) => {
      this.expenses[currExpense.category] += currExpense.cost;
    });
  }

  calculateVatAndCommission(commissionRate) {
    const vatRate = 0.17;
    this.vat = this.shifts.creditTips * vatRate;
    this.commission =
      (this.shifts.deliveries + this.shifts.creditTips - this.vat) *
      commissionRate;
  }

  calculateGrossEarnings() {
    this.gross =
      this.shifts.deliveries +
      this.shifts.creditTips +
      this.shifts.cashTips -
      this.vat -
      this.commission;
  }

  calculateTaxes(creditPoints) {
    this.taxes.nationalInsurance = calculateNationalInsurance(
      this.grossExclCashTips
    );
    this.taxes.income = calculateIncome(this.grossExclCashTips, creditPoints);
  }

  calculateNet() {
    this.net =
      this.gross -
      this.taxes.nationalInsurance -
      this.taxes.income -
      this.expenses.insurance -
      this.expenses.fuel -
      this.expenses.maintenance;
  }
}

module.exports = {
  Revenue,
};
