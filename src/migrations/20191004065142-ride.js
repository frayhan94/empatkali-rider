module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('ride', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
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
        createdAt: {
          type: Sequelize.DATE(3),
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3)'),
          allowNull: false,
        },
        updatedAt: {
          type: Sequelize.DATE(3),
          defaultValue: Sequelize.literal('CURRENT_TIMESTAMP(3) ON UPDATE CURRENT_TIMESTAMP(3)'),
        },
      })
      .then(() => {});
  },
  down: queryInterface => {
    return queryInterface.dropTable('ride');
  },
};
