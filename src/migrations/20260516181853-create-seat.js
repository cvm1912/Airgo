'use strict';
const { Enums } = require('../utils/common');
const { SEAT_TYPE } = Enums;

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
        type: Sequelize.ENUM(Object.values(SEAT_TYPE)),
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
