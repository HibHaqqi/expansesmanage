const express = require("express");
const transaction = require("./transaction_api");
const category = require("./category");
const login = require("./login");
const router = express.Router();

router.use("/api",category);
router.use("/transaction",transaction);
router.use("/login", login);

module.exports =router;