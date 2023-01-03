const {addOrdinanceFiles} = require('../../uploadFiles/crudFiles');
const {addDogPicture} = require('../../uploadFiles/crudFiles');

// // Get dog ordinance files
// export const getOrdinance = async (files: any) => {
//   return addOrdinanceFiles(files);
// };

// Get dog picture file
export const getDogPicture = (file: any) => {
  return addDogPicture(file);
};
