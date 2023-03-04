const _ = require("lodash");

const statusCode = require("../../../constants/status-code");
const usersService = require("../business-logic/users-service");

async function registerUser(req, res) {
  const values = _.pick(req.body, ["name", "email", "password"]);
  const { token, user } = await usersService.registerUser(values);
  res.status(statusCode.success.created).header("x-token", token).json(user);
}

async function loginUser(req, res) {
  const values = _.pick(req.body, ["email", "password"]);
  const { token, user } = await usersService.loginUser(values);
  res.status(statusCode.success.ok).header("x-token", token).json(user);
}

async function authenticateUser(req, res) {
  const { id } = req.user;
  const user = await usersService.authenticateUser(id);
  res.status(statusCode.success.ok).json(user);
}

module.exports = {
  registerUser,
  loginUser,
  authenticateUser,
};
