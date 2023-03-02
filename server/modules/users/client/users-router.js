const express = require("express");

const usersController = require("./users-controller");

const usersRouter = express.Router();
usersRouter.post("/", usersController.registerUser);

module.exports = usersRouter;
