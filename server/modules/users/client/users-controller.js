const _ = require("lodash");

const statusCode = require("../../../constants/status-code");
const usersService = require("../business-logic/users-service");

async function registerUser(req, res) {
  const values = _.pick(req.body, ["name", "email", "password"]);
  const user = await usersService.registerUser(values);
  res.status(statusCode.success.created).json(user);
}

module.exports = {
  registerUser,
};
