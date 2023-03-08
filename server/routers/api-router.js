const express = require("express");

const usersRouter = require("../modules/users/client/users-router");
const profilesRouter = require("../modules/profiles/client/profiles-router");
const expensesRouter = require("../modules/expenses/client/expenses-router");
const shiftsRouter = require("../modules/shifts/client/shifts-router");
const revenuesRouter = require("../modules/revenues/client/revenues-router");

const apiRouter = express.Router();
apiRouter.use("/users", usersRouter);
apiRouter.use("/profiles", profilesRouter);
apiRouter.use("/expenses", expensesRouter);
apiRouter.use("/shifts", shiftsRouter);
apiRouter.use("/revenues", revenuesRouter);

module.exports = apiRouter;
