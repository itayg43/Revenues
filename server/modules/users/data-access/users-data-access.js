const { User, sequelize } = require("../../../db/models");

const sequelizeUniqueError = "SequelizeUniqueConstraintError";

async function registerUser(values) {
  try {
    return await sequelize.transaction(async () => await User.create(values));
  } catch (error) {
    throw error.name === sequelizeUniqueError
      ? new Error("Email address already in use.")
      : error;
  }
}

async function getUserByEmail(email) {
  return await User.findOne({
    where: {
      email,
    },
  });
}

module.exports = {
  registerUser,
  getUserByEmail,
};
