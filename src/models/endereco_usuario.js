'use strict';
const {
  Model,DataTypes
} = require('sequelize');
  class endereco_usuario extends Model {
    static init(sequelize){
      super.init({
        id_cpf: DataTypes.STRING(11),
        uf: DataTypes.TEXT,
        cidade: DataTypes.TEXT,
        bairro: DataTypes.TEXT,
        tipo_logradouro: DataTypes.TEXT,
        logradouro: DataTypes.TEXT,
        numero: DataTypes.TEXT,
        complemento: DataTypes.TEXT,
        cep: DataTypes.TEXT,
      }, {
        sequelize,
      })
    }
    static associate(models) {
      // define association here
    }
  };

module.exports = endereco_usuario;