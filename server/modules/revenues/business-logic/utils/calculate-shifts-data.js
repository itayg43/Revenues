function calculateShiftsData(shifts) {
  return shifts.reduce(
    (data, currShift) => ({
      deliveries: data.deliveries + currShift.deliveriesPaymentReceived,
      creditTips: data.creditTips + currShift.creditTipsReceived,
      cashTips: data.cashTips + currShift.cashTipsReceived,
    }),
    {
      deliveries: 0,
      creditTips: 0,
      cashTips: 0,
    }
  );
}

module.exports = calculateShiftsData;
