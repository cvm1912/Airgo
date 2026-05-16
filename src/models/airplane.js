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
      this.hasMany(models.Flight, { foreignKey: 'airplaneId'});
      this.hasMany(models.Seat, { foreignKey: 'airplaneId' });
    }
  }
  Airplane.init({
    airplaneName: {
      type:DataTypes.STRING,
      allowNull:false
    },
    modelNumber: {
      type: DataTypes.STRING,
      allowNull:false
    },
    manufacturer:{
      type:DataTypes.STRING,
      allowNull:false
    },
    registrationNumber: {
      type: DataTypes.STRING,
      allowNull:false,
      unique:true
    },
    capacity: {
      type: DataTypes.INTEGER,
      allowNull:false,
    },
    economySeats: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    businessSeats: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    firstClassSeats: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    fuelCapacity: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    maxSpeed: {
      type:DataTypes.INTEGER,
      allowNull:false
    },
    rangeKm:{
      type:DataTypes.INTEGER,
      allowNull:false
    },
    status:{
      type:DataTypes.STRING,
      allowNull:false
    },
    airlineId: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    manufacturedYear:{
      type:DataTypes.DATE,
      allowNull:false
    },
    lastMaintenanceDate: {
      type:DataTypes.DATE,
      allowNull:true
    }
  }, {
    sequelize,
    modelName: 'Airplane',
  });
  return Airplane;
};