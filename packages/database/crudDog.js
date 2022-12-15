const dog = require('./models/dog');

exports.getDogs = async () => {
  const dogs = await dog.findAll();
  return dogs;
};

exports.addDog = async newDog => {
  return dog
    .create({
      name: newDog.name,
      // photo: '',
      description: newDog.description,
      vaccination: newDog.vaccination,
      // ordinance: '',
    })
    .then(res => {
      return res.dataValues;
    })
    .catch(err => console.log(err));
};

exports.findDog = async searchId => {
  return await dog.findOne({where: {id: searchId}});
};

exports.setDog = async (data, id) => {
  let dataParsed = JSON.parse(data);
  return dog
    .update(
      {
        name: newDog.name,
        photo: '',
        description: newDog.description,
        vaccination: newDog.vaccination,
        ordinance: '',
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

exports.deleteDog = async id => {
  return dog.destroy({where: {id: id}});
};
