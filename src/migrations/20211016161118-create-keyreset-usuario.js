'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('keyreset_usuarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: false,
        type: Sequelize.INTEGER
      },
      id_cpf:{
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING(11),
        references: {model:'Usuarios', key:'cpf_usuario'},
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      passwordToken: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      passwordTokenExpires: {
        type: Sequelize.DATE,
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
    await queryInterface.dropTable('keyreset_usuarios');
  }
};