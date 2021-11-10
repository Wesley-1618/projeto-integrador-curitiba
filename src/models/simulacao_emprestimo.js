'use strict';
const {
  Model, DataTypes
} = require('sequelize');

  class simulacao_emprestimo extends Model {
    static init(seuqlize){
      super.init({
        cpf_usuario: DataTypes.STRING(11),
        financeira: DataTypes.STRING, 
        renda_mensal: DataTypes.REAL, 
        valor_emprestimo: DataTypes.REAL,
        tarifa: DataTypes.DOUBLE,
        parcelas: DataTypes.INTEGER,
        cet: DataTypes.DOUBLE,
        iof: DataTypes.DOUBLE,
        valor_total: DataTypes.REAL
      },{
        sequelize,
      })
    }
    static associate(models) {
      // define association here
    }
  };

  module.exports = simulacao_emprestimo;