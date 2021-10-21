'use strict';
const {
  Model, DataTypes
} = require('sequelize');

  class keyreset_usuarios extends Model {
    static init(sequelize){
      super.init({
        id_cpf: DataTypes.STRING(11),
        passwordToken: DataTypes.STRING,
        passwordTokenExpires: DataTypes.DATE
      }, {
        sequelize
      })
    }
    static associate(models) {
      
    }
  };
  module.exports =  keyreset_usuarios;
