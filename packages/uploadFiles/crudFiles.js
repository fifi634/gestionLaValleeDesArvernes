const path = require('path');
const fs = require('fs-extra');

// Get application directory
const ordinanceDir = path.resolve('./packages/uploadFiles/ordinanceFiles');
const dogPictureDir = path.resolve('./packages/uploadFiles/dogPictureFiles');

// Import dog picture
exports.addDogPicture = file => {
  const dogPicture = file._value.files[0];

  // Ensure "ordinanceFiles" directory exists
  fs.ensureDirSync(dogPictureDir);

  // Copy "files" recursively (ignore duplicate file names)
  const filePath = path.resolve(dogPictureDir, dogPicture.name);
  if (!fs.existsSync(filePath)) fs.copyFileSync(dogPicture.path, filePath);
};
