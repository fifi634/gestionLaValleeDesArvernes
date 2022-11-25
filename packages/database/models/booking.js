const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize');
const dog = require('../models/dog');

const booking = sequelize.define('booking', {
    in:{
        type:DataTypes.DATE,
        allowNull:false,
    },
    out:{
        type:DataTypes.DATE,
        allowNull:false,
    }
});

dog.hasOne(booking);

booking.belongsToMany(dog, { through: 'book' });

module.exports = booking;