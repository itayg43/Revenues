const { Profile } = require("../../../db/models");

async function submitProfile(values) {
  return await Profile.create(values);
}

module.exports = {
  submitProfile,
};
