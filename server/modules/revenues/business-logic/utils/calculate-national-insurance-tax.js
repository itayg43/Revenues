const nI = {
  reduce: {
    rate: 0.0705,
    salary: 7122,
    fee: 7122 * 0.0705,
  },
  full: {
    rate: 0.196,
  },
};

function calculateNationalInsuranceTax(earnings) {
  if (earnings <= nI.reduce.salary) {
    return earnings * nI.reduce.rate;
  }
  const remainFee = (earnings - nI.reduce.salary) * nI.full.rate;
  return nI.reduce.fee + remainFee;
}

module.exports = calculateNationalInsuranceTax;
