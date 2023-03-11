const validateSchema = require("../../../../middlewares/validate-schema");

const submitProfileSchema = {
  creditPoints: {
    exists: {
      errorMessage: "Credit points is required.",
    },
  },
  commissionRate: {
    exists: {
      errorMessage: "Commission rate is required.",
    },
  },
  insurancePayment: {
    exists: {
      errorMessage: "Insurance payment is required.",
    },
  },
};

function validateSubmitProfileSchema() {
  return validateSchema(submitProfileSchema);
}

module.exports = validateSubmitProfileSchema;
