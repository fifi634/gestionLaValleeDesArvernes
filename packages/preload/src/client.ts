const {
  getClients,
  addClient,
  findClient,
  setClient,
  deleteClient,
} = require('../../database/crudClient');

// Get clients from database
export const displayClients = async () => {
  return await getClients();
};

// Get client object from renderer
export const createClient = async (data: any) => {
  return await addClient(data);
};

// Get client from database
export const searchClient = async (data: any) => {
  return await findClient(data);
};

// Modify client
export const modifyClient = async (data: string, id: any) => {
  return await setClient(data, id);
};

// Delete client
export const eraseClient = async (id: any) => {
  return await deleteClient(id);
};
