const initialShiftsData = {
  deliveries: 0,
  deliveriesFee: 0,
  creditTips: 0,
  creditTipsVat: 0,
  creditTipsFee: 0,
  cashTips: 0,
};

function calculateShiftsData(shifts) {
  const shiftsData = shifts.reduce(
    (data, currShift) => ({
      deliveries: data.deliveries + currShift.deliveries,
      deliveriesFee: data.deliveriesFee + currShift.deliveriesFee,
      creditTips: data.creditTips + currShift.creditTips,
      creditTipsVat: data.creditTipsVat + currShift.creditTipsVat,
      creditTipsFee: data.creditTipsFee + currShift.creditTipsFee,
      cashTips: data.cashTips + currShift.cashTips,
    }),
    { ...initialShiftsData }
  );
  return {
    grossEarningsExcludeCashTips:
      calculateGrossEarningsExcludeCashTips(shiftsData),
    ...shiftsData,
  };
}

function calculateGrossEarningsExcludeCashTips(data) {
  return (
    data.deliveries -
    data.deliveriesFee +
    data.creditTips -
    data.creditTipsVat -
    data.creditTipsFee
  );
}

module.exports = calculateShiftsData;
