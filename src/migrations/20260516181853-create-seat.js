'use strict';
const { Enums } = require('../utils/common');
const { BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY } = Enums.SEAT_TYPE;


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Seats', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      rowNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      columnNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Airplanes', key: 'id' },
        onDelete: 'CASCADE'
      },
      class: {
        type: Sequelize.ENUM,
        value: [BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS],
        defaultValue: SEAT_TYPE.ECONOMY,
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Seats');
  }
};
