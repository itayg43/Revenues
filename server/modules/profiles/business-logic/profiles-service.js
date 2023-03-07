const profilesDataAccess = require("../data-access/profiles-data-access");

async function submitProfile(values) {
  return await profilesDataAccess.submitProfile(values);
}

module.exports = {
  submitProfile,
};
