const path = require('path');
const fs = require('fs-extra');
const dog = require('./models/dog');

// Extension dictionary
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'image/webp': 'webp',
  'application/pdf': 'pdf',
};

// Get application directory
// const ordinanceDir = path.resolve('./packages/renderer/uploadFiles/ordinanceFiles');
const dogPictureDir = path.resolve('./packages/renderer/uploadFiles/dogPictureFiles');

// Import dog picture
exports.addDogPicture = (file, id, dogName) => {
  const dogPicture = file._value.files[0];
  const extension = MIME_TYPES[dogPicture.type];
  const dogFileName = dogName.split(' ').join('_') + id + '.' + extension;
  dog.update(
    {
      photo: './uploadFiles/dogPictureFiles/' + dogFileName,
      // ordinance: './uploadFiles/dogPictureFiles',
    },
    {
      where: {id: id},
    },
  );

  // Ensure "dogPictureFiles" directory exists
  fs.ensureDirSync(dogPictureDir);

  // Copy "files" recursively (ignore duplicate file names)
  const filePath = path.resolve(dogPictureDir, dogFileName);
  if (!fs.existsSync(filePath)) fs.copyFileSync(dogPicture.path, filePath);
};

// // Import ordinance
// exports.addOrdinance = files => {
//   const ordinances = files._value.files;
//   console.log(ordinances);

//   // Ensure "ordinanceFiles" directory exists
//   fs.ensureDirSync(ordinanceDir);

//   // Copy "files" recursively (ignore duplicate file names)
//   const filePath = path.resolve(dogPictureDir, dogPicture.name);
//   if (!fs.existsSync(filePath)) fs.copyFileSync(dogPicture.path, filePath);
// };
