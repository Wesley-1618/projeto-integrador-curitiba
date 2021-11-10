const routes = require('express').Router();
const simulacaoController = require('../controller/SimulacaoEmprestimoController');

routes.post('/simulacao', simulacaoController.store);

module.exports= routes;