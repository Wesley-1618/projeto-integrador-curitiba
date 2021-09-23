const {Sequelize}=require('sequelize');
const dbConfig = require('../config/database')
const LojaConect = require ('../models/loja');

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
