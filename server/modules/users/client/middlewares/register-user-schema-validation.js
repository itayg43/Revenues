const validateSchema = require("../../../../middlewares/validate-schema");

const registerUserSchema = {
  name: {
    exists: {
      errorMessage: "Name is required.",
    },
  },
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

function validateRegisterUserSchema() {
  return validateSchema(registerUserSchema);
}

module.exports = validateRegisterUserSchema;
