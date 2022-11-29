const {DataTypes} = require('sequelize');
const sequelize = require('../dbmgr');

const client = sequelize.define('client', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  phone: {
    type: DataTypes.INTEGER,
  },
  email: {
    type: DataTypes.TEXT,
  },
  adress: {
    type: DataTypes.TEXT,
  },
  payStatut: {
    type: DataTypes.INTEGER,
    defaultValue: 1,
  },
});

module.exports = client;
