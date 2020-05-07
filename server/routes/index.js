//REQUIRE
const express = require('express');

//RUTA DE USUARIOS
const app = express();

app.use(require('./usuario'));
app.use(require('./login'));

module.exports = app;