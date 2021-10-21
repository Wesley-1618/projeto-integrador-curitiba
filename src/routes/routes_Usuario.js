const express = require('express');
const routes = express.Router();
const usuarioController = require('../controller/UsuarioController');

routes.get('/usuario', usuarioController.index);
routes.post('/usuario', usuarioController.store);
routes.get('/usuario/all', usuarioController.fetchall);

module.exports = routes;