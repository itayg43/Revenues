const validateSchema = require("../../../../middlewares/validate-schema");

const submitExpenseSchema = {
  category: {
    exists: {
      errorMessage: "Category is required.",
    },
  },
  cost: {
    exists: {
      errorMessage: "Cost is required.",
    },
  },
  timestamp: {
    exists: {
      errorMessage: "Timestamp is required.",
    },
  },
};

function validateSubmitExpenseSchema() {
  return validateSchema(submitExpenseSchema);
}

module.exports = validateSubmitExpenseSchema;
