'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Airplanes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      airplaneName: {
        type: Sequelize.STRING
      },
      modelNumber: {
        type: Sequelize.STRING
      },
      manufacturer: {
        type: Sequelize.STRING
      },
      registrationNumber: {
        type: Sequelize.STRING
      },
      capacity: {
        type: Sequelize.INTEGER
      },
      economySeats: {
        type: Sequelize.INTEGER
      },
      businessSeats: {
        type: Sequelize.INTEGER
      },
      firstClassSeats: {
        type: Sequelize.INTEGER
      },
      fuelCapacity: {
        type: Sequelize.INTEGER
      },
      maxSpeed: {
        type: Sequelize.INTEGER
      },
      rangeKm: {
        type: Sequelize.INTEGER
      },
      status: {
        type: Sequelize.STRING
      },
      airlineId: {
        type: Sequelize.UUID
      },
      manufacturedYear: {
        type: Sequelize.INTEGER
      },
      lastMaintenanceDate: {
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Airplanes');
  }
};