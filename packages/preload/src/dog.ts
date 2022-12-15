const { getDogs, addDog, findDog, setDog, deleteDog } = require('../../database/crudDog');


// Get clients from database
export const displayDogs = async() => { return await getDogs(); };

// Get client object from renderer
export const createDog = async(data: any) => { return await addDog(data); };

// Get client from database
export const searchDog = async(data: any) => { return await findDog(data); };

// Modify client
export const modifyDog = async(data: string, id: any) => { return await setDog(data, id); };

// Delete client
export const eraseDog = async (id: any) => { return await deleteDog(id) };