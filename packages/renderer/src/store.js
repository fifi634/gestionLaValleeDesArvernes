import {defineStore} from 'pinia';

// Expose boolean for add active class on menu button for watch rooting
export const useWhereIAm = defineStore('whereIAm', {
  state: () => {
    return {
      clientActived: false,
      homeActived: false,
      dogActived: false,
    };
  },
});
