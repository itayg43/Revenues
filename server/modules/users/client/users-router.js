const express = require("express");

const controller = require("./users-controller");

const router = express.Router();
router.post("/", controller.register);

module.exports = router;
