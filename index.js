const express = require("express");
const router = require("./routers/routers");
const ejs = require("ejs");
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = 3000;

app.use(expressLayouts);
app.use(express.json());
app.use(express.urlencoded({
    extended:false
}));


app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', "./pages")



app.use("/",router);

app.listen(port, (res,req)=>{
    console.log(`server up on server ${port}`);
});


