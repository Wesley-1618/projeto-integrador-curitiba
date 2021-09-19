'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class endereco_loja extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  endereco_loja.init({
    uf: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Endereco_loja',
  });
  return endereco_loja;
};