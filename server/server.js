require('./config/config');
const express = require('express');
const app = express();
const bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/usuario', function(req, res) {
    res.json('Hello World')
})

app.post('/usuario', function(req, res) {

    let body = req.body;

    if (body.nombre === undefined) {
        res.status(400).json({
            ok: false,
            mensaje: 'El nombre es necesario'
        });
    }

    res.json({
        persona: body
    });
})

app.put('/usuario/:id', function(req, res) {

    let od = req.params.id;

    res.json({
        od
    });
})

app.delete('/', function(req, res) {
    res.json('Hello World')
})

app.listen(process.env.PORT, () => {
    console.log("Puesto 3000");
})