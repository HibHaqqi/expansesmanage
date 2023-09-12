const express =require("express");
const login = express.Router();
const bcrypt = require('bcrypt');
const {User} =require("../models");
require('dotenv').config();
const LoginValidator = require("../service/login");


//add users login
login.post('/login', LoginValidator.validateLogin, async (req, res) => {
  try {
    const jwt = require('jsonwebtoken');
    const payload = { id: req.user.id, role: req.user.role };
    const secret = process.env.SECRET_KEY;
    const options = { expiresIn: '1h' };
    const token = jwt.sign(payload, secret, options);
    
    res.status(200).json({message: 'user berhasil login', token})
    //res.render('dashboardcss');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan' });
  }
});
//fungsi registrasi
login.post('/registration', async (req, res) => {
    try {
      //menerima data dari body request
      const { name, email, password, role } = req.body;
  
      //validasi data
      if (!name || !email || !password || !role) {
        return res.status(400).json({ message: 'Data tidak lengkap' });
      }
  
      //cek apakah email sudah terdaftar
      const user = await User.findOne({ where: { email } });
      if (user) {
        return res.status(409).json({ message: 'Email sudah terdaftar' });
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
  
      //kirim response dengan data user baru
      res.status(201).json({ message: 'User berhasil dibuat', data: newUser });
    } catch (error) {
      //tangani error
      console.error(error);
      res.status(500).json({ message: 'Terjadi kesalahan' });
    }
  });

module.exports = login;