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
  comment: {
    exists: {
      errorMessage: "Comment is required.",
    },
  },
  purchasedAt: {
    exists: {
      errorMessage: "Purchased time is required.",
    },
  },
};

function validateSubmitExpenseSchema() {
  return validateSchema(submitExpenseSchema);
}

module.exports = validateSubmitExpenseSchema;
