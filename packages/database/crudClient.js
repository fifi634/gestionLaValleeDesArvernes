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
      address: newClient.address,
      postalCode: newClient.postalCode,
      city: newClient.city,
    })
    .then(res => {
      return res.dataValues;
    })
    .catch(err => console.log(err));
};

exports.findClient = async searchId => {
  return await client.findOne({where: {id: searchId}});
};

exports.setClient = async (data, id) => {
  let dataParsed = JSON.parse(data);
  return client
    .update(
      {
        name: dataParsed._value.name,
        firstname: dataParsed._value.firstname,
        phone: dataParsed._value.phone,
        email: dataParsed._value.email,
        address: dataParsed._value.address,
        postalCode: dataParsed._value.postalCode,
        city: dataParsed._value.city,
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
  return client.destroy({where: {id: id}});
};
