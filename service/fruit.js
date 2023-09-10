const express =require("express");
const fruit = express.Router();


//route to fruits
fruit.get( '', (req, res) => {
    //our fruits array
    const fruitsAry = ['apple', 'mango', 'guava', 'banana', 'pineapple']
    //render the template for the fruits page & send data as json
    res.render('fruit', {fruitsAry});
})


module.exports = fruit;