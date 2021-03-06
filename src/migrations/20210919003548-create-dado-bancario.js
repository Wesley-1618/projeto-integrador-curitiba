'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('dado_bancarios', {
      id:{
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
      },
      id_cnpj: {
        type: Sequelize.STRING(14),
        primaryKey: true,
        allowNull: false,
        references: {model:'Lojas', key:'cnpj_loja'},
        onUpdate:'CASCADE',
        onDelete: 'CASCADE',
      },
      nome_banco:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      codigo_banco:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      agencia:{
        type: Sequelize.TEXT,
        allowNull: false,
      },
      numero_conta_corrente:{
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
    await queryInterface.dropTable('dado_bancarios');
  }
};