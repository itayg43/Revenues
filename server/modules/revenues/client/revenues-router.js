const express = require("express");

const revenuesController = require("./revenues-controller");
const validateUserAuthentication = require("../../users/client/middlewares/user-authentication-validation");

const revenuesRouter = express.Router();
revenuesRouter.get(
  "/",
  validateUserAuthentication,
  revenuesController.calculateMonthRevenue
);

module.exports = revenuesRouter;
