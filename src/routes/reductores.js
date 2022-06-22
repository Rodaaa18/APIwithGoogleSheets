// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var ReductController = require('../controllers/reductores.controller.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/reductores', ReductController.getReductores);
api.get('/reductores/:id', ReductController.getReductoresById);
 
// Exportamos la configuración
module.exports = api;