// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var VallasController = require('../controllers/vallas.controller.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/vallas', VallasController.getVallas);
api.get('/vallas/:id', VallasController.getVallasById);
 
// Exportamos la configuración
module.exports = api;