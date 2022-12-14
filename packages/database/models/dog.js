const {DataTypes} = require('sequelize');
const sequelize = require('../dbmgr');
const emmergency = require('./emmergency');

const dog = sequelize.define('dog', {
  name: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  photo: {
    type: DataTypes.TEXT,
  },
  description: {
    type: DataTypes.TEXT,
  },
  vaccination: {
    type: DataTypes.TEXT,
  },
  ordinance: {
    type: DataTypes.TEXT,
  },
});

emmergency.hasOne(dog);

dog.belongsToMany(emmergency, {through: 'alertcontact'});

module.exports = dog;
