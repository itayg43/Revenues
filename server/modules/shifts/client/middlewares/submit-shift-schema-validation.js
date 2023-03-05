const validateSchema = require("../../../../middlewares/validate-schema");

const submitShiftSchema = {
  deliveriesPaymentReceived: {
    exists: {
      errorMessage: "Deliveries payment received is required.",
    },
  },
  creditTipsReceived: {
    exists: {
      errorMessage: "Credit tips received is required.",
    },
  },
  cashTipsReceived: {
    exists: {
      errorMessage: "Cash tips received is required.",
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
