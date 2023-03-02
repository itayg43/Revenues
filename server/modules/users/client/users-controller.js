const _ = require("lodash");

const statusCode = require("../../../constants/status-code");
const service = require("../business-logic/users-service");

async function register(req, res) {
  const values = _.pick(req.body, ["name", "email", "password"]);
  const user = await service.register(values);
  res.status(statusCode.success.created).json(user);
}

module.exports = { register };
