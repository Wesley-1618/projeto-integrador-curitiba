'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Endereco_lojas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      id_cnpj: {
        type: Sequelize.STRING(14),
        allowNull: false,
        primaryKey: true,
        references: {model:'Lojas', key:'cnpj_loja'},
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
    await queryInterface.dropTable('endereco_lojas');
  }
};