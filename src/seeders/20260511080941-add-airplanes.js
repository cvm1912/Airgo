'use strict';
const {Op} = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Airplanes', [{
        airplaneName: 'Boeing 747',
        modelNumber: 'B-747',
        manufacturer: 'Boeing',
        registrationNumber: 'B-1234',
        capacity: 416,
        economySeats: 350,
        businessSeats: 40,
        firstClassSeats: 26,
        fuelCapacity: 214240,
        maxSpeed: 988,
        rangeKm: 15500,
        status: 'Active',
        airlineId: 1,
        manufacturedYear: new Date(),
        lastMaintenanceDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date()
      }], {})

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Airplanes', {[Op.or]:[{
      modelNumber: 'B-747'
    }]})
  }
};
