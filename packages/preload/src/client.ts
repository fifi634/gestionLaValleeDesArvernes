const { getClients, addClient, findClient } = require('../../database/crudClient');


// Get clients from database
export const displayClients = async() => { return await getClients() };

// Get client object from renderer
export const createClient = async(data) => { return await addClient(data) };

// Get client from database
export const searchClient = async(data) => { return await findClient(data) };