const express =require("express");
const login = express.Router();

//add users login
login.get('/v1/user',async (req,res)=>{
    //info by id
})

login.post('/v1/user',async (req,res)=>{
    //registrasi
})

module.exports = login;