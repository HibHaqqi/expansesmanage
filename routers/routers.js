const express = require("express");
const transaction = require("./transaction_api");
const category = require("./category");
const login = require("./login");
const wallet = require("./wallet")
const router = express.Router();

router.use("/api",category);
router.use("/transaction",transaction);
router.use("/login", login);
router.use("/wallet",wallet);

module.exports =router;