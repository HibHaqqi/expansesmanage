const express =require("express");
const login = express.Router();
const app = express();
const jwt = require('jsonwebtoken');
const {User} =require("../models");
const cookieParser = require('cookie-parser');

app.use(cookieParser());

require('dotenv').config();
const LoginValidator = require("../service/login");


//add users login
login.post('/login', LoginValidator.validateLogin, async (req, res) => {
  try {
    
    const {email, password} = req.body
    const accessToken = jwt.sign({email, password}, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "1h"} );
    const refreshToken = jwt.sign({ email, password}, process.env.REFRESH_TOKEN_SECRET,{expiresIn: "7d"} );
    const userpdate = await User.update({refresh_Token:refreshToken},{
      where:{
        email: email
      }
    }) ;
    //res.status(200).json({message: "Token berhasil diupdate",userpdate})
    res.cookie('refreshToken', refreshToken, { 
      httpOnly: true,
      maxAge:7*24*60*60*1000
    });
    //res.json({accessToken});

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