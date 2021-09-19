'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class endereco_usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  endereco_usuario.init({
    uf: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'endereco_usuario',
  });
  return endereco_usuario;
};