const routes = require('express').Router();
const simulacaoController = require('../controller/SimulacaoEmprestimoController');

routes.post('/simulacao', simulacaoController.store);
routes.get('/simulacao/all', simulacaoController.fetchall);

module.exports= routes;