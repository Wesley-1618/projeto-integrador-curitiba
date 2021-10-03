'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('endereco_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      id_cpf: {
        type: Sequelize.STRING(11),
        allowNull: false,
        primaryKey: true,
        references: {model:'Usuarios', key:'cpf_usuario'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      uf: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cidade: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      bairro: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      tipo_logradouro: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      logradouro: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      numero: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      complemento: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      cep: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      createdAt:{
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('endereco_usuarios');
  }
};