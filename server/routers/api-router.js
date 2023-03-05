const express = require("express");

const usersRouter = require("../modules/users/client/users-router");
const expensesRouter = require("../modules/expenses/client/expenses-router");

const apiRouter = express.Router();
apiRouter.use("/users", usersRouter);
apiRouter.use("/expenses", expensesRouter);

module.exports = apiRouter;
