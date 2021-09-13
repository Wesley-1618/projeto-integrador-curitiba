'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Lojas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpj_loja: {
        type: Sequelize.STRING(14),
        allowNull:false
      },
      status_loja: {
        type: Sequelize.STRING,
        allowNull:false
      },
      cnpj_loja: {
        type: Sequelize.STRING,
        allowNull:false
      },
      tipo_loja: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      inscricao_estadual: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      inscricao_municipal: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      ramo_negocio: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      motivo_aprovacao: {
        allowNull: true,
        type: Sequelize.TEXT
      },
      percentual_clipse: {
        allowNull: true,
        type: Sequelize.INTEGER
      },
      razao_social: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      site: {
        allowNull: true,
        type: Sequelize.TEXT
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Lojas');
  }
};