'use strict';
const {
  Model, DataTypes
} = require('sequelize');

  class Usuario extends Model {
    static init(sequelize) {
      super.init({
        cpf_usuario: DataTypes.STRING(11),
        nome_contato: DataTypes.STRING(60),
        estado_usuario: DataTypes.STRING(10),
        telefone_celular: DataTypes.STRING(15),
        telefone_comercial: DataTypes.STRING(15),
        email: DataTypes.STRING(60),
        senha: DataTypes.STRING(300),
        data_nascimento: DataTypes.DATE,
        data_emissao_documento: DataTypes.DATE,
        data_validade: DataTypes.DATE,
        tipo_documento: DataTypes.STRING(20),
        numero_documento: DataTypes.STRING(20),
        orgao_emissor_documento: DataTypes.STRING(10),
        natural_cidade: DataTypes.STRING(40),
        cargo: DataTypes.STRING(20)
      }, {
        sequelize
      })
    }

    static associate(models) {
      // define association here
    }
  };
  module.exports = Usuario;