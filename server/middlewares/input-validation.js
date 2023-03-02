const { validationResult, checkSchema } = require("express-validator");

const statusCode = require("../constants/status-code");

function validateSchema(schema) {
  const validationMiddleware = checkSchema(schema);
  return async (req, _, next) => {
    await validationMiddleware.run(req);
    const result = validationResult(req);
    if (result.isEmpty()) {
      next();
      return;
    }
    const error = Error(
      result
        .array()
        .map((value) => value.msg)
        .join()
    );
    error.statusCode = statusCode.error.client.bad_request;
    next(error);
  };
}

module.exports = {
  validateSchema,
};
