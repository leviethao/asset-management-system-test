'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Asset.init({
    type: DataTypes.STRING,
    serial: DataTypes.STRING,
    status: DataTypes.STRING,
    description: DataTypes.STRING,
    location_id: DataTypes.INTEGER,
    synced: DataTypes.BOOLEAN,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,

  }, {
    sequelize,
    modelName: 'Asset',
  });
  return Asset;
};