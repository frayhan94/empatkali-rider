const Sequelize = require('sequelize');
const db = require('../config/db');

const Ride = db.define(
  'ride',
  {
    startLat: {
      type: Sequelize.DECIMAL(10, 8),
      allowNull: false,
    },
    startLong: {
      type: Sequelize.DECIMAL(11, 8),
      allowNull: false,
    },
    endLat: {
      type: Sequelize.DECIMAL(10, 8),
      allowNull: true,
    },
    endLong: {
      type: Sequelize.DECIMAL(11, 8),
      allowNull: true,
    },
    riderName: {
      type: Sequelize.STRING(30),
      allowNull: false,
      unique: true,
    },
    driverName: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
    driverVehicle: {
      type: Sequelize.STRING(30),
      allowNull: false,
    },
  },
  {
    tableName: 'ride',
  },
);
module.exports = Ride;
