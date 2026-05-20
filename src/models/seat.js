'use strict';
const { Model } = require('sequelize');
const { Enums } = require('../utils/common');
const { BUSINESS, ECONOMY, FIRST_CLASS, PREMIUM_ECONOMY } = Enums.SEAT_TYPE;


module.exports = (sequelize, DataTypes) => {
  class Seat extends Model {
    static associate(models) {
      this.belongsTo(models.Airplane, { foreignKey: 'airplaneId', onDelete: 'CASCADE' });
    }
  }
  Seat.init({
    rowNumber: { type: DataTypes.STRING, allowNull: false },
    columnNumber: { type: DataTypes.STRING, allowNull: false },
    airplaneId: { type: DataTypes.INTEGER, allowNull: false },
    class: {
      type: DataTypes.ENUM,
      value: [BUSINESS, ECONOMY, PREMIUM_ECONOMY, FIRST_CLASS],
      defaultValue: SEAT_TYPE.ECONOMY,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Seat',
  });
  return Seat;
};
