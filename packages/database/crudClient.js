const client = require('./models/client');

exports.getClients = async () => {
  const clients = await client.findAll();
  return clients;
};
