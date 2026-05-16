'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Flights', 'terminal');
    await queryInterface.addColumn('Flights', 'departureTerminal', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    });
    await queryInterface.addColumn('Flights', 'arrivalTerminal', {
      type: Sequelize.STRING,
      allowNull: false,
      defaultValue: ''
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Flights', 'departureTerminal');
    await queryInterface.removeColumn('Flights', 'arrivalTerminal');
    await queryInterface.addColumn('Flights', 'terminal', {
      type: Sequelize.STRING
    });
  }
};
