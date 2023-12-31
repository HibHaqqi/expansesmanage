const express = require("express");
const transaction = require("./transaction_api");
const category = require("./category");
const login = require("./login");
const wallet = require("./wallet")
const page = require("./routeejs")
const router = express.Router();

router.use("/api",category);
router.use("/transaction",transaction);
router.use("/user", login);
router.use("/wallet",wallet);
router.use("/",page);

module.exports =router;