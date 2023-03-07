const express = require("express");

const profilesController = require("./profiles-controller");
const validateUserAuthentication = require("../../users/client/middlewares/user-authentication-validation");
const validateSubmitProfileSchema = require("./middlewares/submit-profile-schema-validation");

const profilesRouter = express.Router();
profilesRouter.post(
  "/",
  [validateUserAuthentication, validateSubmitProfileSchema()],
  profilesController.submitProfile
);

module.exports = profilesRouter;
