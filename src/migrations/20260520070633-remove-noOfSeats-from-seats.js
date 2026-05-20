'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.removeColumn('Seats', 'noOfSeats');
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.addColumn('Seats', 'noOfSeats', {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 1
    });
  }
};
