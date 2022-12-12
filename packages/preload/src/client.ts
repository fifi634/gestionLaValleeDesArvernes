const { getClients, addClient, findClient, setClient, deleteClient } = require('../../database/crudClient');


// Get clients from database
export const displayClients = async() => { return await getClients(); };

// Get client object from renderer
export const createClient = async(data) => { return await addClient(data); };

// Get client from database
export const searchClient = async(data) => { return await findClient(data); };

// Modify client
export const modifyClient = async(data: string, id: number) => { return await setClient(data, id); };

// Delete client
export const eraseClient = async (id: number) => { return await deleteClient(id) };