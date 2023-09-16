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
    /*const {email} = req.body;
    jwt.sign(email,'secret', (error,token)=>{
      if(error){
        console.log(error);
        res.sendStatus(304)
        return
      }
      const Token = token;
      res.json({email :email,
      token:Token})
    })*/
    const {email} = req.body
    const accessToken = jwt.sign({email}, process.env.ACCESS_TOKEN_SECRET,{expiresIn: "120s"} );
    const refreshToken = jwt.sign({ email }, process.env.REFRESH_TOKEN_SECRET,{expiresIn: "1d"} );
    const userpdate = await User.update({refresh_token:refreshToken},{
      where:{
        email: email
      }
    }) ;
    //res.status(200).json({message: "Token berhasil diupdate",userpdate})
    res.cookie('refreshToken', refreshToken, { 
      httpOnly: true,
      maxAge:1*24*60*60*1000
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