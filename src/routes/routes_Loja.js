const express = require('express');
const routes = express.Router();
const lojaController = require ('../controller/LojaController');

routes.get('/loja', lojaController.index);
routes.post('/loja', lojaController.store);


module.exports = routes;
