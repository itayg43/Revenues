const profilesDataAccess = require("../data-access/profiles-data-access");

async function submitProfile(values) {
  return await profilesDataAccess.submitProfile(values);
}

async function getProfileByUid(uid) {
  return await profilesDataAccess.getProfileByUid(uid);
}

module.exports = {
  submitProfile,
  getProfileByUid,
};
