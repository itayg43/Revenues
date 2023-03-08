const nationalInsuranceTax = {
  reduceRate: 0.0705,
  reduceSalary: 7122,
  fullRate: 0.196,
};

function calculateNationalInsuranceTaxFee(shiftsData) {
  const { grossEarningsExcludeCashTips } = shiftsData;
  if (grossEarningsExcludeCashTips <= nationalInsuranceTax.reduceSalary) {
    return grossEarningsExcludeCashTips * nationalInsuranceTax.reduceRate;
  }
  const fullReduceRateFee =
    nationalInsuranceTax.reduceSalary * nationalInsuranceTax.reduceRate;
  const proportionalFullRateFee =
    (grossEarningsExcludeCashTips - nationalInsuranceTax.reduceSalary) *
    nationalInsuranceTax.fullRate;
  return fullReduceRateFee + proportionalFullRateFee;
}

module.exports = calculateNationalInsuranceTaxFee;
