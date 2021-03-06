'use strict';
const {
  Model, DataTypes
} = require('sequelize');

  class simulacao_emprestimo extends Model {
    static init(sequelize){
      super.init({
        cpf_usuario: DataTypes.STRING(11),
        financeira: DataTypes.STRING, 
        renda_mensal: DataTypes.REAL, 
        valor_emprestimo: DataTypes.REAL,
        tarifa: DataTypes.DOUBLE,
        parcelas: DataTypes.INTEGER,
        cet: DataTypes.DOUBLE,
        iof: DataTypes.DOUBLE,
        valor_total: DataTypes.REAL,
        data_parcela: DataTypes.DATE
      },{
        sequelize,
      })
    }
    static associate(models) {
      // define association here
    }
  };

  module.exports = simulacao_emprestimo;