const express = require('express');
const routes = express.Router();
usuarioController = require('../controller/UsuarioController');

routes.post('/usuario', usuarioController.store);

module.exports = routes;