const { getClients, addClient, findClient, setClient } = require('../../database/crudClient');


// Get clients from database
export const displayClients = async() => { return await getClients(); };

// Get client object from renderer
export const createClient = async(data) => { return await addClient(data); };

// Get client from database
export const searchClient = async(data) => { return await findClient(data); };

// Modify client
export const modifyClient = async(data) => { return await setClient(data); };