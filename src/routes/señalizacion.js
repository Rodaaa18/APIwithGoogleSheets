// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var SeñalizacionController = require('../controllers/señalizacion.controller.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/senalizacion', SeñalizacionController.getSeñalizacion);
api.get('/senalizacion/:id', SeñalizacionController.getSeñalizacionById);
 
// Exportamos la configuración
module.exports = api;