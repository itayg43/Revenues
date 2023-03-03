const { User, sequelize } = require("../../../db/models");

const { EmailAddressAlreadyInUseError } = require("../errors/users-errors");

const sequelizeUniqueError = "SequelizeUniqueConstraintError";

async function registerUser(values) {
  try {
    return await sequelize.transaction(async () => await User.create(values));
  } catch (error) {
    throw error.name === sequelizeUniqueError
      ? new EmailAddressAlreadyInUseError()
      : error;
  }
}

async function getUserById(id) {
  return await User.findByPk(id);
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
  getUserById,
  getUserByEmail,
};
