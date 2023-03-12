const data = {
  deliveries: 0,
  creditTips: 0,
  cashTips: 0,
  vat: 0,
  commission: 0,
  grossEarnings: 0,
  grossEarningsExclCashTips: 0,
};

function sumShiftsData(shifts, commissionRate) {
  handleSum(shifts, commissionRate);
  data.grossEarnings = calculateGrossEarnings();
  data.grossEarningsExclCashTips = data.grossEarnings - data.cashTips;
  return data;
}

function handleSum(shifts, commissionRate) {
  shifts.forEach((currShift) => {
    data.deliveries += currShift.deliveries;
    data.creditTips += currShift.creditTips;
    data.cashTips += currShift.cashTips;
    data.vat += currShift.calculateVat();
    data.commission += currShift.calculateCommission(commissionRate);
  });
}

function calculateGrossEarnings() {
  return (
    data.deliveries +
    data.creditTips +
    data.cashTips -
    data.vat -
    data.commission
  );
}

module.exports = sumShiftsData;
