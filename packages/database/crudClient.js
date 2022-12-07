const client = require('./models/client');

exports.getClients = async () => {
  const clients = await client.findAll();
  return clients;
};

exports.addClient = async newClient => {
  return client
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

exports.setClient = async (data2, id) => {
  let data = JSON.parse(data2);
  return client
    .update(
      {
        name: data._value.name,
        firstname: data._value.firstname,
        phone: data._value.phone,
        email: data._value.email,
        address: data._value.address,
      },
      {
        where: {id: id},
      },
    )
    .then(res => {
      return res;
    })
    .catch(err => console.log(err));
};

exports.deleteClient = async id => {
  const delClient = findClient(id);
  return client.destroy(delClient);
};
