// db.js
const { Sequelize } = require('sequelize');
const { development } = require('./config/config.json');

// Create a new Sequelize instance with database credentials from config.json
const sequelize = new Sequelize(
  development.database,
  development.username,
  development.password,
  {
    host: development.host,
    dialect: development.dialect,
  }
);

module.exports = sequelize;  // Export the configured Sequelize instance
