const express = require("express");

const usersController = require("./users-controller");
const validateRegisterUserSchema = require("./middlewares/register-user-schema-validation");
const validateLoginUserSchema = require("./middlewares/login-user-schema-validation");

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

module.exports = usersRouter;
