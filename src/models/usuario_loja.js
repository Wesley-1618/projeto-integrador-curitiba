'use strict';
const {
  Model, DataTypes
} = require('sequelize');

  class Usuario_loja extends Model {
    static init (sequelize){
      super.init({
        cpf_usuario: DataTypes.STRING(11),
        cnpj_loja: DataTypes.STRING(14),
        perfil: DataTypes.STRING(30),
        data_hora_cadastro: DataTypes.DATE
      },{
        sequelize,
      })
    }
    static associate(models) {
      // define association here
    }
  };
module.exports = Usuario_loja;