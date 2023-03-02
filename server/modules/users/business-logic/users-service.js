const { User } = require("../../../db/models");
const usersDataAccess = require("../data-access/users-data-access");

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
    user,
  };
}

async function loginUser(values) {
  const { email, password } = values;
  const user = await usersDataAccess.getUserByEmail(email);
  if (!user) {
    throw new Error("Invalid credentials.");
  }
  const isValidPassword = await user.validatePassword(password);
  if (!isValidPassword) {
    throw new Error("Invalid credentials.");
  }
  const token = user.generateToken();
  return {
    token,
    user,
  };
}

module.exports = {
  registerUser,
  loginUser,
};
