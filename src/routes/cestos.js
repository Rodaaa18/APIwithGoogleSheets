// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var CestosController = require('../controllers/cestos.controller.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/cestos', CestosController.getCestos);
api.get('/cestos/:id', CestosController.getCestosById);
 
// Exportamos la configuración
module.exports = api;