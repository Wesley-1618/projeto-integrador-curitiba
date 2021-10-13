const express = require('express');
const route = express.Router();
const UsuarioLojaController = require('../controller/UsuarioLojaController');

route.get('/usuario/loja', UsuarioLojaController.index);
route.post('/usuario/loja',UsuarioLojaController.store);

module.exports = route;