// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var EmailController = require('../controllers/email.controller.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.post('/form', EmailController.emailSend);
 
// Exportamos la configuración
module.exports = api;