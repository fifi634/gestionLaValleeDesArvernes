const client = require('./models/client');

exports.getClients = async () => {
  const clients = await client.findAll();
  return clients;
};

exports.addClient = async newClient => {
  client.create({
    name: newClient.name,
    firstname: newClient.firstname,
    phone: newClient.phone,
    email: newClient.email,
    adress: newClient.adress,
  });
};

exports.findClient = async searchId => {
  return await client.findOne({where: {id: searchId}});
};

exports.setClient = async data => {
  client.set({
    name: data.name,
    firstname: data.firstname,
    phone: data.phone,
    email: data.email,
    adress: data.adress,
  });
};
