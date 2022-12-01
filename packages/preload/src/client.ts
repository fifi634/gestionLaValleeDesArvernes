const {getClients} = require('../../database/crudClient');

// Get clients from database by Sequelize
export const displayClients = async() => { return await getClients() }