const _ = require("lodash");

const statusCode = require("../../../constants/status-code");
const profilesService = require("../business-logic/profiles-service");

async function submitProfile(req, res) {
  const { id } = req.user;
  const values = _.pick(req.body, [
    "creditPoints",
    "commissionRate",
    "insurancePayment",
  ]);
  const profile = await profilesService.submitProfile({
    uid: id,
    ...values,
  });
  res.status(statusCode.success.created).json(profile);
}

module.exports = {
  submitProfile,
};
