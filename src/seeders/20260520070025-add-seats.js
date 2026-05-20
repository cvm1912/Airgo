'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Seats',[
    {
      rowNumber:'1',
      columnNumber:'A',
      airplaneId:1,
      class:'ECONOMY',
      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      rowNumber:'1',
      columnNumber:'B',
      airplaneId:1,
      class:'ECONOMY',
      createdAt:new Date(),
      updatedAt:new Date()
    },
     {
      rowNumber:'1',
      columnNumber:'C',
      airplaneId:1,
      class:'ECONOMY',
      createdAt:new Date(),
      updatedAt:new Date()
    },
     {
      rowNumber:'8',
      columnNumber:'A',
      airplaneId:1,
      class:'PREMIUM_ECONOMY',

      createdAt:new Date(),
      updatedAt:new Date()
    },
    {
      rowNumber:'8',
      columnNumber:'B',
      airplaneId:1,
      class:'PREMIUM_ECONOMY',
      
      createdAt:new Date(),
      updatedAt:new Date()
    },
     {
      rowNumber:'8',
      columnNumber:'C',
      airplaneId:1,
      class:'PREMIUM_ECONOMY',
      createdAt:new Date(),
      updatedAt:new Date()
    },
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
