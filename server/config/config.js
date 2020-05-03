//PUERTO
process.env.PORT = process.env.PORT || 3000;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//BASE DE DATOS
let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/prueba';
} else {
    urlBD = 'mongodb+srv://andresch-dev:LX0HfoiamBbyZmr9@cluster0-r0ppm.mongodb.net/cafe';
}

process.env.URLDB = urlBD;
//mongodb + srv