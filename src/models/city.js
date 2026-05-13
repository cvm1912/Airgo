'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  City.init( {
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    code: {
      type: DataTypes.STRING(10),
      unique: true,
    },

    country: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    countryCode: {
      type: DataTypes.STRING(5),
    },

    state: {
      type: DataTypes.STRING,
    },

    timezone: {
      type: DataTypes.STRING,
    },

    latitude: {
      type: DataTypes.DECIMAL(10, 7),
    },

    longitude: {
      type: DataTypes.DECIMAL(10, 7),
    },

    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'City',
  });
  return City;
};