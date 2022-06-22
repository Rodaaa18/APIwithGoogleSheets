// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var LucesController = require('../controllers/luces.controller.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/luces', LucesController.getLuces);
api.get('/luces/:id', LucesController.getLucesById);
 
// Exportamos la configuración
module.exports = api;