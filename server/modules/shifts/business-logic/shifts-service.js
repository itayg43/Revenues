const shiftsDataAccess = require("../data-access/shifts-data-access");

async function submitShift(values) {
  return await shiftsDataAccess.submitShift(values);
}

async function getShiftsByUidAndMonth(uid, month) {
  return await shiftsDataAccess.getShiftsByUidAndMonth(uid, month);
}

module.exports = {
  submitShift,
  getShiftsByUidAndMonth,
};
