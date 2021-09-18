import {sequelize, QueryTypes} from './db-con';
import User from './models';

const testCon = async (): (Promise<boolean>) => {

  const data = await sequelize.query('SELECT true as con_success;', {
    type: QueryTypes.SELECT,
  });
  if (data.length) {
    return true;
  }
  return false;
};

export {
    testCon,
    User,
};
