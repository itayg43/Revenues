const { User, sequelize } = require("../../../db/models");

async function registerUser(values) {
  return await sequelize.transaction(async () => await User.create(values));
}

module.exports = {
  registerUser,
};
