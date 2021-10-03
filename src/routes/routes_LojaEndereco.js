const express  = require('express');
const routes = express.Router();
const enderecoController = require('../controller/LojaEnderecoController');

routes.post('/loja/endereco', enderecoController.store);

module.exports = routes;

