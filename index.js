const express = require("express");
const router = require("./routers/routers");
const ejs = require("ejs");
const dotenv = require("dotenv");
dotenv.config()
const flash = require('connect-flash');
const session = require('express-session');


const app = express();
const port = 3000;


app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));
// Express sessions
app.use(session({ secret: 'yoursecret', resave: true,  saveUninitialized: true }));

// Connect flash
app.use(flash());

app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', "./pages")



app.use("/",router);

app.listen(port, (res,req)=>{
    console.log(`server up on server ${port}`);
});


