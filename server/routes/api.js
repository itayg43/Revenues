const express = require("express");

const users = require("../modules/users/client/users-router");

const router = express.Router();
router.use("/users", users);

module.exports = router;
