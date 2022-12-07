const client = require('./models/client');

exports.getClients = async () => {
  const clients = await client.findAll();
  return clients;
};

exports.addClient = async newClient => {
  client
    .create({
      name: newClient.name,
      firstname: newClient.firstname,
      phone: newClient.phone,
      email: newClient.email,
      adress: newClient.adress,
    })
    .then(res => {
      return res.dataValues;
    })
    .catch(err => console.log(err));
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
    address: data.address,
  });
};
