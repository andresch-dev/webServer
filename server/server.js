require('./config/config');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//HABILITAR LA CARPETA PUBLIC
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(require('./routes/index'));

//await

mongoose.connect(process.env.URLDB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    },
    (err, res) => {

        console.log('Base de Datos ONLINE');

    });


app.listen(process.env.PORT, () => {
    console.log("Puerto 3000");
})