const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.MYSQL_DATABASE, process.env.MYSQL_USER, process.env.MYSQL_PASSWORD, {
  host: process.env.MYSQL_HOST,
  dialect: 'mysql',
  logging: false,
});

sequelize.authenticate()
  .then(() => console.log('Connected to MySQL'))
  .catch((err) => console.error('Failed to connect to MySQL:', err));

module.exports = sequelize;
