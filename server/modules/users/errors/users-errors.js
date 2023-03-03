const statusCode = require("../../../constants/status-code");

class InvalidCredentialsError extends Error {
  constructor() {
    super("Invalid credentials.");
    this.statusCode = statusCode.error.client.bad_request;
  }
}

class EmailAddressAlreadyInUseError extends Error {
  constructor() {
    super("Email address already in use.");
    this.statusCode = statusCode.error.client.bad_request;
  }
}

module.exports = {
  InvalidCredentialsError,
  EmailAddressAlreadyInUseError,
};
