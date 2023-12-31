const bcrypt = require("bcrypt");
const { User } = require("../models");
const jwt = require("jsonwebtoken");

class LoginValidator {
  constructor() {
    this.User = new User;

  }
  static async validateLogin(req, res, next) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        req.flash("error", "Data tidak lengkap");
        return res.redirect("/");

        //res.status(400).json({ message: 'Data tidak lengkap' });
      }

      const user = await User.findOne({ where: { email } });
      if (!user) {
        req.flash("error", "User tidak ditemukan");

        return res.redirect("/");
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        req.flash("error", "Password tidak sesuai");
        return res.redirect("/");
        //res.status(401).json({ message: 'Password salah' });
      }

      req.user = user;
      next();
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan" });
    }
  }

  static async registration(req, res, next) {
    try {
      //menerima data dari body request
      const { name, email, password, role } = req.body;
      let error = [];
      //validasi data
      if (!name || !email || !password || !role) {
        req.flash("error", "Data tidak lengkap");

        return res.redirect("/");
        //return res.status(400).json({ message: "" });
        //error.push({ message: "Data tidak lengkap" });
      }

      //cek apakah email sudah terdaftar
      const user = await User.findOne({ where: { email } });
      if (user) {
        req.flash("error", "Email sudah terdaftar");

        return res.redirect("/");
        //return res.status(409).json({ message: "" });
        //error.push({ message: "Email sudah terdaftar" });
      }

      //hash password menggunakan bcrypt

      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      //buat user baru di database
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
      });
      req.user = user;
      next();
     
      //res.redirect("/dashboard"); // successful regis
      //res.status(201).json({ message: "User berhasil dibuat", data: newUser });
    } catch (error) {
      //tangani error
      console.error(error);
      res.status(500).json({ message: "Terjadi kesalahan" });
    }
  }

  static async isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) {
      return next();
    } else {
      // Redirect to login page or send an error message
      res.redirect("/");
    }
  }
}

module.exports = LoginValidator;
