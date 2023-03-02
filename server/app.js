require("express-async-errors");
const express = require("express");
const cors = require("cors");

const requestLogger = require("./middlewares/request-logger");
const errorHandler = require("./middlewares/error-handler");

const apiRouter = require("./routers/api-router");

const app = express();
const corsOptions = {
  exposedHeaders: "x-token",
};
app.use(cors(corsOptions));
app.use(requestLogger);
app.use(express.json());
app.use("/api", apiRouter);
app.use(errorHandler);

module.exports = app;
