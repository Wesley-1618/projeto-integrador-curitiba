'use strict';
const {
  Model, DataTypes
} = require('sequelize');

  class Endereco_loja extends Model {
    static init (sequelize){
      super.init({
        id_cnpj: DataTypes.STRING(14),
        uf: DataTypes.TEXT,
        cidade: DataTypes.TEXT,
        bairro: DataTypes.TEXT,
        tipo_logradouro: DataTypes.TEXT,
        logradouro: DataTypes.TEXT,
        numero: DataTypes.TEXT,
        complemento: DataTypes.TEXT,
        cep: DataTypes.TEXT,
      }, {
        sequelize
      })
    }

    static associate(models) {
      
    }
  };

  module.exports = Endereco_loja;
