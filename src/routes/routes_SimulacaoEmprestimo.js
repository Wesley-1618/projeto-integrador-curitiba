const routes = require('express').Router();
const SimulacaoEmprestimoController = require('../controller/SimulacaoEmprestimoController');
const simulacaoController = require('../controller/SimulacaoEmprestimoController');

routes.post('/simulacao', simulacaoController.store);
routes.get('/simulacao/all', simulacaoController.fetchall);
routes.get('/simulacao/allUsers', SimulacaoEmprestimoController.fetchallsimulations);

module.exports= routes;