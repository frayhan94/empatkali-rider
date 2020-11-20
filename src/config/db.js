const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE, process.env.USERNAME, process.env.PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  port: process.env.MYSQL_PORT,
  logging: true,
  operatorsAliases: Sequelize.Op,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
  timezone: '+07:00',
});

sequelize
  .authenticate()
  .then(() => {
    console.log('MYSQL Connection has been established successfully.');
  })
  .catch(err => {
    console.error('MYSQL Unable to connect to the database:', err);
  });

module.exports = sequelize;
