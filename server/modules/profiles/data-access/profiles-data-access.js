const { Profile } = require("../../../db/models");

async function submitProfile(values) {
  return await Profile.create(values);
}

async function getProfileByUid(uid) {
  return await Profile.findOne({
    where: {
      uid,
    },
  });
}

module.exports = {
  submitProfile,
  getProfileByUid,
};
