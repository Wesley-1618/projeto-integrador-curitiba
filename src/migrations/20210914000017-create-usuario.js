'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf_usuario: {
        type: Sequelize.STRING(11),
        allowNull:false,
        unique:true,
      },
      nome_contato: {
        type: Sequelize.STRING(60),
        allowNull:false
      },
      estado_usuario: {
        type: Sequelize.STRING(10),
        allowNull:false
      },
      telefone_celular: {
        type: Sequelize.STRING(15),
        allowNull:false
      },
      telefone_comercial: {
        type: Sequelize.STRING(15),
        allowNull:true
      },
      email: {
        type: Sequelize.STRING(60),
        allowNull:false
      },
      senha: {
        type: Sequelize.STRING(300),
        allowNull:false
      },
      data_nascimento: {
        type: Sequelize.DATE,
        allowNull:true
      },
      data_emissao_documento: {
        type: Sequelize.DATE,
        allowNull:true
      },
      data_validade: {
        type: Sequelize.DATE,
        allowNull:true
      },
      tipo_documento: {
        type: Sequelize.STRING(20),
        allowNull:true
      },
      numero_documento: {
        type: Sequelize.STRING(20),
        allowNull:true
      },
      orgao_emissor_documento: {
        type: Sequelize.STRING(10),
        allowNull:true
      },
      natural_cidade: {
        type: Sequelize.STRING(40),
        allowNull:true
      },
      cargo: {
        type: Sequelize.STRING(20),
        allowNull:true
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuarios');
  }
};




