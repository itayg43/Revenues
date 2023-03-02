const { User, sequelize } = require("../../../db/models");

async function register(values) {
  return await sequelize.transaction(async () => await User.create(values));
}

module.exports = {
  register,
};
