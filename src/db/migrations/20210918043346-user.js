/* eslint-disable babel/camelcase */

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.createTable('Users', {
    id: {
      allowNull: false,
      primaryKey: true,
      type: Sequelize.BIGINT,
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    last_name: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    email: {
      type: Sequelize.TEXT,
      allowNull: false,
      unique: true,
    },
    phone: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    introduction: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    experience: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    achivements: {
      type: Sequelize.TEXT,
      allowNull: false,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
    updated_at: {
      type: Sequelize.DATE,
      allowNull: false,
    },
  }),

  down: (queryInterface) => queryInterface.dropTable('Users'),
};
