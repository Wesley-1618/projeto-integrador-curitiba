'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class dado_bancario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  dado_bancario.init({
    id_cnpj: DataTypes.STRING(14),
    nome_banco: DataTypes.TEXT,
    codigo_banco: DataTypes.TEXT,
    agencia: DataTypes.TEXT,
    numero_conta_corrente: DataTypes.TEXT,
  }, {
    sequelize,
    modelName: 'dado_bancario',
  });
  return dado_bancario;
};