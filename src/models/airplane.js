'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airplane extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Airplane.init({
    airplaneName: DataTypes.STRING,
    modelNumber: DataTypes.STRING,
    manufacturer: DataTypes.STRING,
    registrationNumber: DataTypes.STRING,
    capacity: DataTypes.INTEGER,
    economySeats: DataTypes.INTEGER,
    businessSeats: DataTypes.INTEGER,
    firstClassSeats: DataTypes.INTEGER,
    fuelCapacity: DataTypes.INTEGER,
    maxSpeed: DataTypes.INTEGER,
    rangeKm: DataTypes.INTEGER,
    status: DataTypes.STRING,
    airlineId: DataTypes.UUID,
    manufacturedYear: DataTypes.INTEGER,
    lastMaintenanceDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};