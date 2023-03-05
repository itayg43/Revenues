const express = require("express");

const shiftsController = require("./shifts-controller");
const validateUserAuthentication = require("../../users/client/middlewares/user-authentication-validation");
const validateSubmitShiftSchema = require("./middlewares/submit-shift-schema-validation");

const shiftsRouter = express.Router();
shiftsRouter.post(
  "/",
  [validateUserAuthentication, validateSubmitShiftSchema()],
  shiftsController.submitShift
);

module.exports = shiftsRouter;
