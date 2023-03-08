function calculateShiftsData(shifts) {
  return shifts.reduce(
    (data, currShift) => ({
      deliveries: data.deliveries + currShift.deliveries,
      deliveriesFee: data.deliveriesFee + currShift.deliveriesFee,
      creditTips: data.creditTips + currShift.creditTips,
      creditTipsVat: data.creditTipsVat + currShift.creditTipsVat,
      creditTipsFee: data.creditTipsFee + currShift.creditTipsFee,
      cashTips: data.cashTips + currShift.cashTips,
    }),
    {
      deliveries: 0,
      deliveriesFee: 0,
      creditTips: 0,
      creditTipsVat: 0,
      creditTipsFee: 0,
      cashTips: 0,
    }
  );
}

module.exports = calculateShiftsData;
