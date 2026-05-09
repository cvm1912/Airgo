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
        type: Sequelize.STRING,
        allowNull: false
      },
      modelNumber: {
        type: Sequelize.STRING,
        allowNull:false
      },
      manufacturer: {
        type: Sequelize.STRING,
        allowNull:false,
      },
      registrationNumber: {
        type: Sequelize.STRING,
        allowNull:false,
        unique:true
      },
      capacity: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      economySeats: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      businessSeats: {
        type: Sequelize.INTEGER, 
        allowNull:false
      },
      firstClassSeats: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      fuelCapacity: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      maxSpeed: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      rangeKm: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      status: {
        type: Sequelize.STRING,
        allowNull:false
      },
      airlineId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      manufacturedYear: {
        type: Sequelize.DATE,
        allowNull:false
      },
      lastMaintenanceDate: {
        type: Sequelize.DATE,
        allowNull:true
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