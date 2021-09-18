import {dbUtil} from '../db';

import {User, Filter} from './user-type';

const createUser = async (user:User) => {
  const {firstName, lastName, achivements, email, experience, introduction, phone} = user;
  await dbUtil.User.findOrCreate({
    where: {
      email,
    },
    defaults: {
      // eslint-disable-next-line babel/camelcase
      first_name: firstName, last_name: lastName, achivements, email, experience, introduction, phone, created_at: new Date(), updated_at: new Date(),
    },
  });
  // await dbUtil.User.create({first_name: firstName, last_name: lastName, achivements, email, experience, introduction, phone, created_at: new Date(), updated_at: new Date()});

};

const getUsers = async (filter:Filter) => {
  const users = await dbUtil.User.findAll({attributes: filter.attributes});
  return users;
};

const getUserById = async (id:number) => {
  const user = await dbUtil.User.findByPk(id);
  return user;
};

export {
    createUser,
    getUsers,
    getUserById,
};
