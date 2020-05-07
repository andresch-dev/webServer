//PUERTO
process.env.PORT = process.env.PORT || 3000;

//ENTORNO
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

//VENCIMIENTO TOKEN
//60 SEGUNDOS
//60 MINUTOS
//24 HORAS
//30 DIAS
process.env.CADUCIDAD_TOKEN = 60 * 60 * 24 * 30;

//SEED de AUTENTIFICACION
process.env.SEED = process.env.SEED || 'secret-seed-desarrollo';

//BASE DE DATOS
let urlBD;

if (process.env.NODE_ENV === 'dev') {
    urlBD = 'mongodb://localhost:27017/prueba';
} else {
    urlBD = process.env.MONGO_URI;
}

process.env.URLDB = urlBD;