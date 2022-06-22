// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var TachosController = require('../controllers/tachos.controller.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/tachos', TachosController.getTachos);
api.get('/tachos/:id', TachosController.getTachosById);
 
// Exportamos la configuración
module.exports = api;