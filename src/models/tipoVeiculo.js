import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js';

class TipoVeiculo extends Model {}

TipoVeiculo.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'TipoVeiculo',
    tableName: 'tipos_veiculo',
    timestamps: true,
    underscored: true,
    paranoid: true,
    defaultScope: {
      attributes: {
        exclude: ['deletedAt'],
      },
    },
  },
);

export default TipoVeiculo;
