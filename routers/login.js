const express = require("express");
const login = express.Router();
const passport = require("passport");
const LoginValidator = require("../service/login");

//add users login
login.post("/login", LoginValidator.validateLogin, (req, res, next) => {
  passport.authenticate("local", (err, user, info) => {
    if (err) {
      return next(err); // handle error
    }
    if (!user) {
      return res.redirect("/homepage"); // handle incorrect user
    }
    req.logIn(user, (err) => {
      if (err) {
        return next(err); // handle error
      }
      return res.redirect("/dashboard"); // successful login
    });
  })(req, res, next);
});
//fungsi registrasi
login.post(
  "/registration",
  LoginValidator.registration,
  async (req, res) => {}
);

module.exports = login;
