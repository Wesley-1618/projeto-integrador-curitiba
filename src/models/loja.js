'use strict';
const {
  Model, Sequelize, DataTypes
} = require('sequelize');
  class Loja extends Model {
    static init(sequelize){
      super.init({
          cnpj_loja: DataTypes.STRING(14),
          status_loja: DataTypes.STRING,
          tipo_loja: DataTypes.INTEGER,
          inscricao_estadual: DataTypes.TEXT,
          inscricao_municipal: DataTypes.TEXT,
          ramo_negocio: DataTypes.TEXT,
          motivo_aprovacao: DataTypes.TEXT,
          percentual_clipse: DataTypes.INTEGER,
          razao_social : DataTypes.TEXT,
          site: DataTypes.TEXT,
        }, {
          sequelize,
        })
      }
      static associate(models) {
        // define association here
      }
    };
    
module.exports = Loja;