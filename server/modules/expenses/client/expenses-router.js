const express = require("express");

const expensesController = require("./expenses-controller");
const validateUserAuthentication = require("../../users/client/middlewares/user-authentication-validation");

const expensesRouter = express.Router();
expensesRouter.post(
  "/",
  validateUserAuthentication,
  expensesController.submitExpense
);
module.exports = expensesRouter;
