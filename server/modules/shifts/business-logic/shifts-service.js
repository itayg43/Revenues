const shiftsDataAccess = require("../data-access/shifts-data-access");

async function submitShift(values) {
  return await shiftsDataAccess.submitShift(values);
}

module.exports = {
  submitShift,
};
