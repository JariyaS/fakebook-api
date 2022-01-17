"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("friends", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      request_to_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          tableName: "users",
        },
        key: "id",
      },
      request_from_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        reference: {
          tableName: "users",
        },
        key: "id",
      },
      updated_at: {
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable("friends");
  },
};
