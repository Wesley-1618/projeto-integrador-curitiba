'use strict';
const {
  Model, DataTypes
} = require('sequelize');
  class dado_bancario extends Model {
      static init (sequelize){
        super.init({
          id_cnpj: DataTypes.STRING(14),
          nome_banco: DataTypes.TEXT,
          codigo_banco: DataTypes.TEXT,
          agencia: DataTypes.TEXT,
          numero_conta_corrente: DataTypes.TEXT,
        },{
          sequelize,
        })
      }
    static associate(models) {
      // define association here
    }
  };
module.exports = dado_bancario;
