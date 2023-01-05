// const {addOrdinanceFiles} = require('../../database/crudFiles');
const {addDogPicture} = require('../../database/crudFiles');

// // Get dog ordinance files
// export const getOrdinance = async (files: any) => {
//   return addOrdinanceFiles(files);
// };

// Get dog picture file
export const getDogPicture = (file: any, id: string, dogName: string) => {
  return addDogPicture(file, id, dogName);
};
