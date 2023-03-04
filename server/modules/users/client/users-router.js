const express = require("express");

const usersController = require("./users-controller");
const validateRegisterUserSchema = require("./middlewares/register-user-schema-validation");
const validateLoginUserSchema = require("./middlewares/login-user-schema-validation");
const validateUserAuthentication = require("./middlewares/user-authentication-validation");

const usersRouter = express.Router();
usersRouter.post(
  "/register",
  validateRegisterUserSchema(),
  usersController.registerUser
);
usersRouter.post(
  "/login",
  validateLoginUserSchema(),
  usersController.loginUser
);
usersRouter.get(
  "/authenticate",
  validateUserAuthentication,
  usersController.authenticateUser
);
module.exports = usersRouter;
