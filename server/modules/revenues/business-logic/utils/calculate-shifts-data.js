const calculateFee = require("./calculate-fee");
const calculateVat = require("./calculate-vat");

function calculateShiftsData(shifts, profile) {
  const { monthlyEmployerCompanyFee: fee } = profile;
  const shiftsData = shifts.reduce(
    (data, currShift) => ({
      deliveries: data.deliveries + currShift.deliveries,
      creditTips: data.creditTips + currShift.creditTips,
      cashTips: data.cashTips + currShift.cashTips,
    }),
    { deliveries: 0, creditTips: 0, cashTips: 0 }
  );
  shiftsData.deliveriesFee = calculateFee(shiftsData.deliveries, fee);
  shiftsData.creditTipsVat = calculateVat(shiftsData.creditTips);
  shiftsData.creditTipsFee = calculateFee(
    shiftsData.creditTips - shiftsData.creditTipsVat,
    fee
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
