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

function calculateIncomeTax(earnings, creditPoints) {
  const credit = creditPoints * iT.creditPointValue;
  const fee = calculateFee(earnings);
  return fee > credit ? fee - credit : 0;
}

function calculateFee(earnings) {
  if (earnings <= iT.l1.salary) {
    return earnings * iT.l1.rate;
  }
  if (earnings > iT.l1.salary && earnings <= iT.l2.salary) {
    const remainFee = (earnings - iT.l1.salary) * iT.l2.rate;
    return iT.l1.fee + remainFee;
  }
  const remainFee = (earnings - iT.l2.salary) * iT.l3.rate;
  return iT.l1.fee + iT.l2.fee + remainFee;
}

module.exports = calculateIncomeTax;
