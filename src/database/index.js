const {Sequelize}=require('sequelize');
const LojaConect = require ('../models/loja');
const UsuarioConect = require('../models/usuario');
const LojaEnderecoConect = require('../models/endereco_loja');
const LojaDadoBancarioConect = require('../models/dado_bancario');
const UsuarioEnderecoConect = require('../models/endereco_usuario');
const UsuarioLojaConect = require('../models/usuario_loja');
const UsuarioKeyResetConect = require('../models/keyreset_usuario');

const link = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    dialect:'postgres',
    port:process.env.DB_PORT
  })
  
  const conect = async ()=>{
    try {
        await link.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
  }
  conect();
  
LojaConect.init(link);
UsuarioConect.init(link);
LojaEnderecoConect.init(link);
LojaDadoBancarioConect.init(link);
UsuarioEnderecoConect.init(link);
UsuarioLojaConect.init(link);
UsuarioKeyResetConect.init(link);
