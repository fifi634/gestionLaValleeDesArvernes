const client = require('./models/client');

exports.getClients = async () => {
  const clients = await client.findAll();
  console.log('crud : ', clients);
  return clients;
};
