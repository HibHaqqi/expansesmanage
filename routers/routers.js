const express = require("express");
const api = require("./api");
const transaction = require("./transaction_api")
const router = express.Router();

router.use("/api",api);
router.use("/transaction",transaction);

module.exports =router;