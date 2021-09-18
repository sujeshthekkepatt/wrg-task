import {Sequelize, QueryTypes} from 'sequelize';

import {logger} from '../logging';

const dblogger = logger.child({name: 'dblogger'});
const sequelize = new Sequelize({
  username: process.env.POSTGRES_USER as string,
  password: process.env.POSTGRES_PSWD as string,
  database: process.env.POSTGRES_DB as string,
  host: process.env.POSTGRES_HOST as string,
  dialect: 'postgres',
  port: process.env.POSTGRES_PORT as any,
  logging: (...params) => dblogger.info(...params),
  pool: {
    max: 5,
    min: 2,
    acquire: 60000,
    idle: 60000,
  },
  retry: {},
});
export {sequelize, QueryTypes};
