const iT = {
  creditPointValue: 235,
  l1: {
    salary: 6790,
    rate: 0.1,
    fee: 6790 * 0.1,
  },
  l2: {
    salary: 9730,
    rate: 0.14,
    fee: 9730 * 0.14,
  },
  l3: {
    salary: 15620,
    rate: 0.2,
  },
};

function calculateIncomeTaxFee(shiftsData, profile) {
  const { incomeTaxCreditPoints: creditPoints } = profile;
  const { grossEarningsExcludeCashTips: earnings } = shiftsData;
  const incomeTaxCredit = creditPoints * iT.creditPointValue;
  const incomeTaxFee = handleIncomeTaxFeeCalculation(earnings);
  return incomeTaxFee > incomeTaxCredit ? incomeTaxFee - incomeTaxCredit : 0;
}

function handleIncomeTaxFeeCalculation(earnings) {
  if (earnings <= iT.l1.salary) {
    return handleLevelOne(earnings);
  }
  if (earnings > iT.l1.salary && earnings <= iT.l2.salary) {
    return handleLevelTwo(earnings);
  }
  return handleLevelThree(earnings);
}

function handleLevelOne(earnings) {
  return earnings * iT.l1.rate;
}

function handleLevelTwo(earnings) {
  const remainFee = (earnings - iT.l1.salary) * iT.l2.rate;
  return iT.l1.fee + remainFee;
}

function handleLevelThree(earnings) {
  const remainFee = (earnings - iT.l2.salary) * iT.l3.rate;
  return iT.l1.fee + iT.l2.fee + remainFee;
}

module.exports = calculateIncomeTaxFee;
