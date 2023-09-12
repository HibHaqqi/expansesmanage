const bcrypt = require('bcrypt');
const {User} =require("../models");

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
  }

  module.exports = LoginValidator;