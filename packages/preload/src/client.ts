const {getClients} = require('../../database/crudClient');


export const displayClients = async() => { 
    console.log('preload : ', await getClients())
    
    return await getClients();
}