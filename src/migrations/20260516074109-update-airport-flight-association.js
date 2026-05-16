'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addConstraint('Flights', {
      fields: ['airplaneId'],
      type: 'foreign key',
      name: 'fk_flights_airplaneId',
      references: { table: 'Airplanes', field: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addConstraint('Flights', {
      fields: ['departureAirportId'],
      type: 'foreign key',
      name: 'fk_flights_departureAirportId',
      references: { table: 'Airports', field: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
    await queryInterface.addConstraint('Flights', {
      fields: ['arrivalAirportId'],
      type: 'foreign key',
      name: 'fk_flights_arrivalAirportId',
      references: { table: 'Airports', field: 'id' },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeConstraint('Flights', 'fk_flights_airplaneId');
    await queryInterface.removeConstraint('Flights', 'fk_flights_departureAirportId');
    await queryInterface.removeConstraint('Flights', 'fk_flights_arrivalAirportId');
  }
};
