const parseNumberWithTwoDecimals = require("../../../../utils/parse-number-with-two-decimals");

const nationalInsuranceTax = {
  reduceRate: 0.0705,
  reduceSalary: 7122,
  fullRate: 0.196,
};

function calculateNationalInsuranceTaxFee(shiftsData) {
  const { grossEarningsExcludeCashTips } = shiftsData;
  if (grossEarningsExcludeCashTips <= nationalInsuranceTax.reduceSalary) {
    return parseNumberWithTwoDecimals(
      grossEarningsExcludeCashTips * nationalInsuranceTax.reduceRate
    );
  }
  const fullReduceRateFee =
    nationalInsuranceTax.reduceSalary * nationalInsuranceTax.reduceRate;
  const proportionalFullRateFee =
    (grossEarningsExcludeCashTips - nationalInsuranceTax.reduceSalary) *
    nationalInsuranceTax.fullRate;
  return parseNumberWithTwoDecimals(
    fullReduceRateFee + proportionalFullRateFee
  );
}

module.exports = calculateNationalInsuranceTaxFee;
