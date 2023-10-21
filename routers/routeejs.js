const express = require("express");
const { isAuthenticated } = require("../service/login");

const pages = express.Router();
const { Expanses, Income } = require("../models");
const Transaction = require("../service/transaction");
const Wallets = require("../service/wallet");

pages.get("/", (req, res) => {
  res.render("homepage", { messages: req.flash() });
});

pages.get("/regis", (req, res) => {
  res.render("registration");
});
pages.get("/login", (req, res) => {
  res.render("login");
});

pages.get("/dashboard", isAuthenticated,async (req, res) => {
  const user_id = req.session.passport.user;
  const walletService = new Wallets();
  const getWalletByUserId = await walletService.getWalletByUserId(user_id);
  res.render("dashboard",{getWalletByUserId});
});

pages.get("/dashboard/expanse", isAuthenticated, async (req, res) => {
  const user_id = req.session.passport.user;
  const transactionService = new Transaction();
  const recentTransactionByUserId =
    await transactionService.recentTransactionByUserId(user_id);
  const walletService = new Wallets();
  const getWalletByUserId = await walletService.getWalletByUserId(user_id);
  const expanse = await Expanses.findAll();
  const availableData = await transactionService.getAvailableMonthsAndYears(user_id);
    
  res.render("dashboardexpanses", { recentTransactionByUserId, expanse,getWalletByUserId ,availableData});
});

pages.get("/dashboard/income" /*isAuthenticated,*/, (req, res) => {
  res.render("dashboardincome");
});

pages.get("/dashboard/wallet", (req, res) => {
  res.render("dashboardwallet");
});

pages.get("/profile", (req, res) => {
  res.render("profile");
});

pages.get("/logout", (req, res) => {
  req.logout((err) => {
    if (err) {
      // handle the error
      console.log(err);
      return res.status(500).json({ error: "Error logging out" });
    }
    req.flash("success_msg", "You are logged out");
    res.redirect("/");
  });
});

module.exports = pages;
