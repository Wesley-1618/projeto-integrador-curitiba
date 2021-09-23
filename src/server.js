const env = require('dotenv');
env.config();
require('reflect-metadata');
require('./database');
const express = require ('express');
const routes = require ('./routes/routesOne');
const routeLoja = require ('./routes/routes_Loja');
const port = 3000;
const app = express ();
app.use(express.json());

console.log(process.env.TESTE);
app.use(routes);
app.use(routeLoja);
app.listen(port);