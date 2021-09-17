'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Usuario_lojas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      cpf_usuario: {
        type: Sequelize.STRING(11),    
        allowNull: false,
        references: { model: 'Usuarios', key: 'cpf_usuario'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      cnpj_loja: {
        type: Sequelize.STRING(14),
        allowNull: false,
        references: { model: 'Lojas', key: 'cnpj_loja'},
        onUpdate : 'CASCADE',
        onDelete: 'CASCADE',
        primaryKey: true,
      },
      perfil: {
        type: Sequelize.STRING(30),
        allowNull: false,
      },
      data_hora_cadastro: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Usuario_lojas');
  }

};