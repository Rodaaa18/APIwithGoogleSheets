// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var PisosController = require('../controllers/pisos.controller.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/pisos', PisosController.getPisos);
api.get('/pisos/:id', PisosController.getPisosById);
 
// Exportamos la configuración
module.exports = api;