// Cargamos el módulo de express para poder crear rutas
var express = require('express');
 
// Cargamos el controlador
var PresupuestoController = require('../controllers/presupuesto.controller.js');
 
// Llamamos al router
var api = express.Router();
 
// Creamos una ruta de tipo GET para el método de pruebas
api.get('/presupuesto', PresupuestoController.postProduct);
 
// Exportamos la configuración
module.exports = api;