const statusCode = require("../constants/status-code");

function errorHandler(err, _, res, _) {
  console.error(err);
  const status = err.statusCode ?? statusCode.error.server.internal;
  const message = err.message ?? "Something went wrong.";
  res.status(status).json({ message });
}

module.exports = errorHandler;
