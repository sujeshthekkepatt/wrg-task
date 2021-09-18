/* eslint-disable babel/camelcase */
import {Model, DataTypes} from 'sequelize';

import {sequelize} from '../db-con';

class User extends Model {}

User.init({
  id: {
    type: DataTypes.BIGINT,
    autoIncrement: true,
    primaryKey: true,
  },
  first_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  last_name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  introduction: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  experience: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  achivements: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: false,
  },
}, {
  // Other model options go here
  timestamps: false,

  sequelize,
  modelName: 'User',
});

export default User;
