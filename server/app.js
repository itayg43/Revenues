require("express-async-errors");
const express = require("express");
const cors = require("cors");

const requestLogger = require("./middlewares/request-logger");
const errorHandler = require("./middlewares/error-handler");

const api = require("./routes/api");

const app = express();
app.use(cors());
app.use(requestLogger);
app.use(express.json());
app.use("/api", api);
app.use(errorHandler);

module.exports = app;
