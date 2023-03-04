const { User } = require("../../../db/models");
const { InvalidCredentialsError } = require("../errors/users-errors");
const usersDataAccess = require("../data-access/users-data-access");
const { UserDtoMapper } = require("./dtos/user-dto-mapper");

async function registerUser(values) {
  const { password } = values;
  const hashedPassword = await User.hashPassword(password);
  const user = await usersDataAccess.registerUser({
    ...values,
    password: hashedPassword,
  });
  const token = user.generateToken();
  return {
    token,
    user: UserDtoMapper.map(user),
  };
}

async function loginUser(values) {
  const { email, password } = values;
  const user = await usersDataAccess.getUserByEmail(email);
  if (!user) {
    throw new InvalidCredentialsError();
  }
  const isValidPassword = await user.validatePassword(password);
  if (!isValidPassword) {
    throw new InvalidCredentialsError();
  }
  const token = user.generateToken();
  return {
    token,
    user: UserDtoMapper.map(user),
  };
}

async function authenticateUser(id) {
  const user = await usersDataAccess.getUserById(id);
  return UserDtoMapper.map(user);
}

module.exports = {
  registerUser,
  loginUser,
  authenticateUser,
};
