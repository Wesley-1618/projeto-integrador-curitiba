const express = require('express');
const route = express.Router();
const usuarioEnderecoController = require('../controller/EnderecoUsuarioController');

route.post('/usuario/endereco', usuarioEnderecoController.store);
module.exports = route;
