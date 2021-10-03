const express = require('express');
const route = express.Router();
const UsuarioLojaController = require('../controller/UsuarioLojaController');

route.post('/usuario/loja',UsuarioLojaController.store);

module.exports = route;