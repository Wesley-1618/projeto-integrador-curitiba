'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('simulacao_emprestimos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cpf_usuario: {
        type: Sequelize.STRING(11),
        primaryKey: true,
        allowNull: false,
        references: {model:'Usuarios', key:'cpf_usuario'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      },
      financeira:{
        type: Sequelize.STRING,
        allowNull: false,
      },
      renda_mensal:{
        type: Sequelize.REAL,
        allowNull: false,
      },
      valor_emprestimo:{
        type: Sequelize.REAL,
        allowNull: false,
      },
      tarifa:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      parcelas:{
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      cet:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      iof:{
        type: Sequelize.DOUBLE,
        allowNull: false,
      },
      valor_total:{
        type: Sequelize.REAL,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('simulacao_emprestimos');
  }
};