'use strict';
const {
  Model, DataTypes
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Usuario extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Usuario.init({
    cpf_usuario: DataTypes.STRING(11),
    nome_contato: DataTypes.STRING,
    estado_usuario: DataTypes.STRING,
    telefone_celular: DataTypes.STRING,
    telefone_comercial: DataTypes.STRING,
    email: DataTypes.STRING,
    senha: DataTypes.STRING,
    data_nascimento: DataTypes.DATE,
    data_emissao_documento: DataTypes.DATE,
    data_validade: DataTypes.DATE,
    tipo_documento: DataTypes.STRING,
    numero_documento: DataTypes.STRING,
    orgao_emissor_documento: DataTypes.STRING,
    natural_cidade: DataTypes.STRING,
    cargo: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Usuario',
  });
  return Usuario;
};