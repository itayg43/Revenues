const profilesDataAccess = require("../data-access/profiles-data-access");

async function submitProfile(values) {
  const commissionRate = values.commissionRate / 100;
  return await profilesDataAccess.submitProfile({
    ...values,
    commissionRate,
  });
}

async function getProfileByUid(uid) {
  return await profilesDataAccess.getProfileByUid(uid);
}

module.exports = {
  submitProfile,
  getProfileByUid,
};
