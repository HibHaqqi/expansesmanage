const bcrypt = require('bcrypt');
const {User} =require("../models");
const jwt = require('jsonwebtoken');
class LoginValidator {
    static async validateLogin(req, res, next) {
      try {
        const { email, password } = req.body;
    
        if (!email || !password) {
          return res.status(400).json({ message: 'Data tidak lengkap' });
        }
    
        const user = await User.findOne({ where: { email } });
        if (!user) {
          return res.status(404).json({ message: 'User tidak ditemukan' });
        }
    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(401).json({ message: 'Password salah' });
        }
        
        req.user = user;
        next();
      } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Terjadi kesalahan' });
      }
    }

    static async registration(req,res,next){
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
    }

    static async isAuthenticated(req, res, next) {
      // ambil token dari header
      const authHeader = req.header('authorization');
      const token = authHeader &&authHeader.split('')[1];

      if(token==null ) return res.sendStatus(401);
      jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error,decoded)=>{
        if(error) return res.sendStatus(401);
        req.email = decoded.email;
        next()
      })
      
      
    };

    
  }

  module.exports = LoginValidator;