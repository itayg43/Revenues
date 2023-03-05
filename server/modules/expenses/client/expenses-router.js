const express = require("express");

const expensesController = require("./expenses-controller");
const validateUserAuthentication = require("../../users/client/middlewares/user-authentication-validation");
const validateSubmitExpenseSchema = require("./middlewares/submit-expense-schema-validation");

const expensesRouter = express.Router();
expensesRouter.post(
  "/",
  [validateUserAuthentication, validateSubmitExpenseSchema()],
  expensesController.submitExpense
);
module.exports = expensesRouter;
