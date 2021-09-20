'use strict';
const {
  Model,
  DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario_loja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario_loja.init({
    cpf_usuario: DataTypes.STRING(11),
    cnpj_loja: DataTypes.STRING(14),
    perfil: DataTypes.STRING(30),
    data_hora_cadastro: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Usuario_loja',
  });
  return Usuario_loja;
};