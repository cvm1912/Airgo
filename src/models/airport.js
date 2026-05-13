'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.cityId,
        {
          foreignKey: 'cityId',
          onDelete:'CASCADE',
          onUpdate:'CASCADE',
        }
      )
    }
  }
  Airport.init({
    airportName: DataTypes.STRING,
    code: DataTypes.STRING,
    address: DataTypes.STRING,
    terminalCount: DataTypes.INTEGER,
    runwayCount: DataTypes.INTEGER,
    airportType: DataTypes.STRING,
    operationalStatus: DataTypes.STRING,
    cityId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};