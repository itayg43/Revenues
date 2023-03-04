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

class NoTokenProvidedError extends Error {
  constructor() {
    super("Access denied, no token provided.");
    this.statusCode = statusCode.error.client.unauthorized;
  }
}

class InvalidTokenProvidedError extends Error {
  constructor() {
    super("Access denied, invalid token provided.");
    this.statusCode = statusCode.error.client.bad_request;
  }
}

module.exports = {
  InvalidCredentialsError,
  EmailAddressAlreadyInUseError,
  NoTokenProvidedError,
  InvalidTokenProvidedError,
};
