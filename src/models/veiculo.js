import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js';
import TipoVeiculo from './tipoVeiculo.js';

class Veiculo extends Model {}

Veiculo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    fabricante: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    ano_modelo: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    cambio: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    combustivel: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    quilometragem: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    cor: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    placa: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    valor: {
      type: DataTypes.DECIMAL(10, 2),
      allowNull: false,
    },

    observacoes: {
      type: DataTypes.TEXT,
    },

    imagens: {
      type: DataTypes.JSON,
      defaultValue: [],
    },

    tipo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    visivel: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    sequelize,
    modelName: 'Veiculo',
    tableName: 'veiculos',
    timestamps: true,
    underscored: true,
    defaultScope: {
      attributes: {
        exclude: ['visivel'],
      },
    },
  },
);

Veiculo.belongsTo(TipoVeiculo, { as: 'tipo', foreignKey: 'tipo_id' });
TipoVeiculo.hasMany(Veiculo, { as: 'veiculos', foreignKey: 'tipo_id' });

export default Veiculo;
