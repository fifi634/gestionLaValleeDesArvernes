const Sequelize = require('sequelize');

// Sequelize parameters (sqlite)
module.exports = new Sequelize({
  dialect: 'sqlite',
  storage: './packages/database/database.sqlite',
});