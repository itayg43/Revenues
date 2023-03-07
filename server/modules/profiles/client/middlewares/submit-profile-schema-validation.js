const validateSchema = require("../../../../middlewares/validate-schema");

const submitProfileSchema = {
  incomeTaxCreditPoints: {
    exists: {
      errorMessage: "Income tax credit points is required.",
    },
  },
  monthlyEmployerCompanyFee: {
    exists: {
      errorMessage: "Monthly employer company fee is required.",
    },
  },
  monthlyInsurancePayments: {
    exists: {
      errorMessage: "Monthly insurance payments is required.",
    },
  },
};

function validateSubmitProfileSchema() {
  return validateSchema(submitProfileSchema);
}

module.exports = validateSubmitProfileSchema;
