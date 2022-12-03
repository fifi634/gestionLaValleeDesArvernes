import Client from './components/Client.vue';
import DisplayClient from './components/DisplayClient.vue';
import Coucou from './components/Coucou.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {path: '/', name: 'home', component: DisplayClient},
  {path: '/client', name: 'addClient', component: Client},
  {path: '/client/:id', name: 'getClient', component: Client},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
