const client = require('./models/client');

exports.getClients = async () => {
  const clients = await client.findAll();
  return clients;
};

exports.addClient = async newClient => {
  // console.log(newClient);
  client.create({
    name: newClient.name,
    firstname: newClient.firstname,
    phone: newClient.phone,
    email: newClient.email,
    adress: newClient.adress,
  });
};
