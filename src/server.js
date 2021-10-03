const env = require('dotenv');
env.config();
require('reflect-metadata');
require('./database');
const express = require ('express');
const cors = require('cors')
const routes = require ('./routes/routesOne');
const routeLoja = require ('./routes/routes_Loja');
const routeUsuario = require ('./routes/routes_Usuario');
const routeLojaEndereco = require ('./routes/routes_LojaEndereco');
const routeDadosBancarios = require('./routes/routes_DadosBancarios');
const routeUsuarioEndereco = require('./routes/routes_UsuarioEndereco');
const routeUsuarioLoja = require('./routes/routes_UsuarioLoja');
const port = process.env.HOST_PORT;
const app = express ();
app.use(express.json());

app.use(cors());
app.use(routes);
app.use(routeLoja);
app.use(routeUsuario);
app.use(routeLojaEndereco);
app.use(routeDadosBancarios);
app.use(routeUsuarioEndereco);
app.use(routeUsuarioLoja);
app.listen(process.env.PORT || port);