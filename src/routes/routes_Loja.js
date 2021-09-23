const express = require('express');
const routes = express.Router();
const lojaController = require ('../controller/LojaController');

routes.post('/loja', lojaController.store);

module.exports = routes;
