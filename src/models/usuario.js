import { DataTypes, Model } from 'sequelize';
import sequelize from '../database/index.js';

class Usuario extends Model {}

Usuario.init(
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

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },

    admin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Usuario',
    tableName: 'usuarios',
    timestamps: true,
    underscored: true,
    paranoid: true,
    defaultScope: {
      attributes: {
        exclude: ['password', 'deletedAt'],
      },
    },
  },
);

export default Usuario;
