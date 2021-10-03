const express = require('express');
const routes = express.Router();
const dadoController = require('../controller/DadoBancariosLojaController');

routes.post('/loja/dadoBancario', dadoController.store);

module.exports = routes;
