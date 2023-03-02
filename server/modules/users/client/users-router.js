const express = require("express");

const usersController = require("./users-controller");

const usersRouter = express.Router();
usersRouter.post("/register", usersController.registerUser);
usersRouter.post("/login", usersController.loginUser);

module.exports = usersRouter;
