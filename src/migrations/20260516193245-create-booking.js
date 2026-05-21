'use strict';
const { Enums } = require('../utils/common');
const { BOOKING_STATUS } = Enums;
const {BOOKED, PENDING, CANCELLED, INITIATED} = Enums.BOOKING_STATUS


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Bookings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'Flights', key: 'id' },
        onDelete: 'CASCADE'
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.ENUM,
        values:[BOOKED,CANCELLED,PENDING, INITIATED],
        defaultValue: BOOKING_STATUS.INITIATED,
        allowNull: false
      },
      noofSeats:{
        type:Sequelize.INTEGER,
        allowNull:false
      },
      totalCost: {
        type: Sequelize.DECIMAL,
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
    await queryInterface.dropTable('Bookings');
  }
};