const {DataTypes} = require('sequelize');
const sequelize = require('../dbmgr');

const client = sequelize.define('client', {
  firstname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.TEXT,
  },
  address: {
    type: DataTypes.TEXT,
  },
  payStatut: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

module.exports = client;
