const { Shift } = require("../../../db/models");
const shiftsDataAccess = require("../data-access/shifts-data-access");
const profilesService = require("../../profiles/business-logic/profiles-service");

const vat = 0.17;

async function submitShift(values) {
  const { uid, deliveries, creditTips } = values;
  const profile = await profilesService.getProfileByUid(uid);
  const fee = profile.monthlyEmployerCompanyFee;
  const deliveriesFee = Shift.calculateFee(deliveries, fee);
  const creditTipsVat = Shift.calculateVat(creditTips, vat);
  const creditTipsFee = Shift.calculateFee(creditTips - creditTipsVat, fee);
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
