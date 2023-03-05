const { Shift } = require("../../../db/models");

async function submitShift(values) {
  return await Shift.create(values);
}

module.exports = {
  submitShift,
};
