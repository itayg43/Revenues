const shiftsDataAccess = require("../data-access/shifts-data-access");
const profilesService = require("../../profiles/business-logic/profiles-service");
const calculateFee = require("./utils/calculate-fee");
const calculateVat = require("./utils/calculate-vat");

async function submitShift(values) {
  const { uid, deliveries, creditTips } = values;
  const profile = await profilesService.getProfileByUid(uid);
  const fee = profile.monthlyEmployerCompanyFee;
  const deliveriesFee = calculateFee(deliveries, fee);
  const creditTipsVat = calculateVat(creditTips);
  const creditTipsFee = calculateFee(creditTips - creditTipsVat, fee);
  return await shiftsDataAccess.submitShift({
    deliveriesFee,
    creditTipsVat,
    creditTipsFee,
    ...values,
  });
}

async function getShiftsByUidAndMonth(uid, month) {
  return await shiftsDataAccess.getShiftsByUidAndMonth(uid, month);
}

module.exports = {
  submitShift,
  getShiftsByUidAndMonth,
};
