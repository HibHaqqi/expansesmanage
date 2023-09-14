const express =require("express");
const login = express.Router();
const app = express();

const cookieParser = require('cookie-parser');
app.use(cookieParser());

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
    res.cookie('token', token, { httpOnly: true });
    //res.status(200).json({message: 'user berhasil login', token})
    res.render('dashboardcss');
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Terjadi kesalahan' });
  }
});
//fungsi registrasi
login.post('/registration', LoginValidator.registration, async (req, res) => {
    
  });

module.exports = login;