function sumShiftsData(shifts) {
  const shiftsData = shifts.reduce(
    (data, currShift) => ({
      deliveries: data.deliveries + currShift.deliveries,
      creditTips: data.creditTips + currShift.creditTips,
      cashTips: data.cashTips + currShift.cashTips,
      vat: data.vat + currShift.vat,
      commission: data.commission + currShift.commission,
    }),
    {
      deliveries: 0,
      creditTips: 0,
      cashTips: 0,
      vat: 0,
      commission: 0,
    }
  );
  const grossEarnings = calculateGrossEarnings(shiftsData);
  return {
    grossEarnings,
    grossEarningsExclCashTips: grossEarnings - shiftsData.cashTips,
    ...shiftsData,
  };
}

function calculateGrossEarnings(data) {
  return (
    data.deliveries +
    data.creditTips +
    data.cashTips -
    data.vat -
    data.commission
  );
}

module.exports = sumShiftsData;
