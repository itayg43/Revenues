const validateSchema = require("../../../../middlewares/validate-schema");

const submitShiftSchema = {
  deliveries: {
    exists: {
      errorMessage: "Deliveries is required.",
    },
  },
  creditTips: {
    exists: {
      errorMessage: "Credit tips is required.",
    },
  },
  cashTips: {
    exists: {
      errorMessage: "Cash tips is required.",
    },
  },
  timestamp: {
    exists: {
      errorMessage: "Timestamp is required.",
    },
  },
};

function validateSubmitShiftSchema() {
  return validateSchema(submitShiftSchema);
}

module.exports = validateSubmitShiftSchema;
