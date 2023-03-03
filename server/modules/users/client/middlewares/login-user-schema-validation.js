const validateSchema = require("../../../../middlewares/validate-schema");

const loginUserSchema = {
  email: {
    exists: {
      errorMessage: "Email is required.",
    },
    isEmail: {
      errorMessage: "Valid email address is required.",
    },
  },
  password: {
    exists: {
      errorMessage: "Password is required.",
    },
  },
};

function validateLoginUserSchema() {
  return validateSchema(loginUserSchema);
}

module.exports = validateLoginUserSchema;
