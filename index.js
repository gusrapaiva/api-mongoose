const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.urlencoded({extended: true}));

app.use(express.json());

let db = "mongodb://localhost:27017" ;

mongoose.connect(db).then(() => {
    console.log('doido')
    app.get('/', (req, res) => {
        res.json({message: "FODASE"})
    })
}).catch ((err) => {
    console.log("Deu xabu");
})



app.listen(3000);