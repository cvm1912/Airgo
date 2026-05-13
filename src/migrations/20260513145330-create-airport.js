"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Airports", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      airportName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      code: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true,
        unique: true,
      },
      terminalCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      runwayCount: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 1,
      },
      airportType: {
        type: Sequelize.ENUM(
          "DOMESTIC",
          "INTERNATIONAL",
          "MILITARY",
          "PRIVATE",
        ),
        allowNull: false,
        defaultValue: "DOMESTIC",
      },
      operationalStatus: {
        type: Sequelize.ENUM("ACTIVE", "MAINTENANCE", "CLOSED"),
        allowNull: false,
        defaultValue: "ACTIVE",
      },
      cityId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Airports");
  },
};
