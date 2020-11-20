const Ride = require('../models/ride');

module.exports = {
  get: async condition => {
    return Ride.findAndCountAll({
      attributes: [
        'id',
        'startLat',
        'startLong',
        'endLat',
        'endLong',
        'riderName',
        'driverName',
        'driverVehicle',
      ],
      where: condition,
      order: [['createdAt', 'ASC']],
    });
  },
  save: async payload => {
    return Ride.create(payload);
  },
};
