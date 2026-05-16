'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Flights', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      flightNumber: {
        type: Sequelize.STRING,
        allowNull: false
      },
      airplaneId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      departureAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        
      },
      arrivalAirportId: {
        type: Sequelize.INTEGER,
        allowNull: false,
       
      },
      departureTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      arrivalTime: {
        type: Sequelize.DATE,
        allowNull: false
      },
      departureTerminal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      arrivalTerminal: {
        type: Sequelize.STRING,
        allowNull: false
      },
      boardingGate: {
        type: Sequelize.STRING
      },
      totalSeats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      availableSeats: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      basePrice: {
        type: Sequelize.DECIMAL,
        allowNull: false
      },
      baggageAllowance: {
        type: Sequelize.STRING
      },
      mealAvailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      wifiAvailable: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
      },
      flightStatus: {
        type: Sequelize.STRING,
        defaultValue: 'SCHEDULED'
      },
      journeyDuration: {
        type: Sequelize.INTEGER
      },
      flightType: {
        type: Sequelize.STRING
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
    await queryInterface.dropTable('Flights');
  }
};
