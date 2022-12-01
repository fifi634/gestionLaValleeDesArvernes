import AddClient from './components/AddClient.vue';
import DisplayClient from './components/DisplayClient.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {path: '/', component: DisplayClient},
  {path: '/client', component: AddClient},
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
