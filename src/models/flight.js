'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flight extends Model {
    static associate(models) {
      this.belongsTo(models.Airport, { foreignKey: 'departureAirportId', as: 'departureAirport' });
      this.belongsTo(models.Airport, { foreignKey: 'arrivalAirportId', as: 'arrivalAirport' });
      this.belongsTo(models.Airplane, { foreignKey: 'airplaneId' });
    }
  }
  Flight.init({
    flightNumber: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    airplaneId: {
       type: DataTypes.INTEGER, 
       allowNull: false 
    },
    departureAirportId: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    arrivalAirportId: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    departureTerminal: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    arrivalTerminal: { 
      type: DataTypes.STRING, 
      allowNull: false
     },
    departureTime: { 
      type: DataTypes.DATE, 
      allowNull: false 
    },
    arrivalTime: { 
      type: DataTypes.DATE, 
      allowNull: false 
    },
    boardingGate: { 
      type: DataTypes.STRING, 
      allowNull: false 
    },
    totalSeats: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    availableSeats: { 
      type: DataTypes.INTEGER, 
      allowNull: false 
    },
    basePrice: { 
      type: DataTypes.DECIMAL, 
      allowNull: false 
    },
    baggageAllowance:DataTypes.STRING,
    mealAvailable: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: false 
    },
    wifiAvailable: { 
      type: DataTypes.BOOLEAN, 
      defaultValue: false 
    },
    flightStatus: { 
      type: DataTypes.STRING, 
      defaultValue: 'SCHEDULED' 
    },
    journeyDuration: DataTypes.INTEGER,
    flightType: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Flight',
  });
  return Flight;
};
