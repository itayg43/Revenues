const { Shift } = require("../../../db/models");

const shiftsDataAccess = require("../data-access/shifts-data-access");
const profilesService = require("../../profiles/business-logic/profiles-service");

async function submitShift(values) {
  const profile = await profilesService.getProfileByUid(values.uid);
  const vat = Shift.calculateVat(values.creditTips);
  const grossEarningsExclCashTips = values.deliveries + values.creditTips;
  const commission = Shift.calculateCommission(
    grossEarningsExclCashTips - vat,
    profile.commissionRate
  );
  return await shiftsDataAccess.submitShift({
    vat,
    commission,
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
