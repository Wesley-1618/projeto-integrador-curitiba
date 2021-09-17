'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Loja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Loja.init({
    cnpj_loja: DataTypes.STRING(14),
    status_loja: DataTypes.STRING,
    tipo_loja: DataTypes.INTEGER,
    inscricao_estadual: DataTypes.TEXT,
    inscricao_municipal: DataTypes.TEXT,
    ramo_negocio: DataTypes.TEXT,
    motivo_aprovacao: DataTypes.TEXT,
    percentual_clipse: DataTypes.INTEGER,
    razao_social : DataTypes.TEXT,
    site: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'Loja',
  });
  return Loja;
};