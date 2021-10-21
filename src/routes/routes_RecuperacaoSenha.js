const routes = require('express').Router();
const authController = require('../controller/authController');

routes.get('/auth/token', authController.gerar_token);
routes.get('/auth/senha', authController.reset_senha);

module.exports = routes;