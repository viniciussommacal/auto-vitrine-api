import { Sequelize } from 'sequelize';
import databaseConfig from '../config/config.json' with { type: 'json' };

const env = process.env.NODE_ENV || 'development';

const sequelize = new Sequelize(databaseConfig[env]);

export default sequelize;
