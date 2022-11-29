const {DataTypes} = require('sequelize');
const sequelize = require('../dbmgr');

const emmergency = sequelize.define('emmergency', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  firstname: {
    type: DataTypes.TEXT,
  },
  phone: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.TEXT,
  },
  address: {
    type: DataTypes.TEXT,
  },
});

module.exports = emmergency;
