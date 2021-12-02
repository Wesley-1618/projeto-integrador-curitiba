const express = require('express');
const routes = express.Router();
const lojaController = require ('../controller/LojaController');

routes.get('/loja', lojaController.index);
routes.post('/loja', lojaController.store);
routes.get('/loja/all', lojaController.fetchall);
routes.get('/loja/razao_social', lojaController.fetchName);


module.exports = routes;
