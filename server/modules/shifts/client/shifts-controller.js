const _ = require("lodash");

const statusCode = require("../../../constants/status-code");
const shiftsService = require("../business-logic/shifts-service");

async function submitShift(req, res) {
  const { id } = req.user;
  const values = _.pick(req.body, [
    "deliveriesPaymentReceived",
    "creditTipsReceived",
    "cashTipsReceived",
    "timestamp",
  ]);
  const shift = await shiftsService.submitShift({
    uid: id,
    ...values,
  });
  res.status(statusCode.success.created).json(shift);
}

module.exports = {
  submitShift,
};
