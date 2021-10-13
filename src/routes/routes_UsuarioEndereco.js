const express = require('express');
const route = express.Router();
const usuarioEnderecoController = require('../controller/EnderecoUsuarioController');

route.get('/usuario/endereco', usuarioEnderecoController.index);

route.post('/usuario/endereco', usuarioEnderecoController.store);

module.exports = route;
