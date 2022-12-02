import Client from './components/Client.vue';
import DisplayClient from './components/DisplayClient.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {path: '/', component: DisplayClient},
  {path: '/client', component: Client},
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
