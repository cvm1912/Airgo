'use strict';
const { Model } = require('sequelize');
const { Enums } = require('../utils/common');
const { BOOKING_STATUS } = Enums;

module.exports = (sequelize, DataTypes) => {
  class Booking extends Model {
    static associate(models) {
      this.belongsTo(models.Flight, { foreignKey: 'flightId', onDelete: 'CASCADE' });
    }
  }
  Booking.init({
    flightId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    status: {
      type: DataTypes.ENUM(Object.values(BOOKING_STATUS)),
      defaultValue: BOOKING_STATUS.INITIATED,
      allowNull: false
    },
    totalCost: { type: DataTypes.DECIMAL, allowNull: false }
  }, {
    sequelize,
    modelName: 'Booking',
  });
  return Booking;
};
