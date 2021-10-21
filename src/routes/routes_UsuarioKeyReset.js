const express = require('express');
const route = express.Router();
const KeyResetController = require('../controller/UsuarioKeyResetController');

route.get('/usuario/keyreset', KeyResetController.index);
route.post('/usuario/keyreset', KeyResetController.store);

module.exports = route;



