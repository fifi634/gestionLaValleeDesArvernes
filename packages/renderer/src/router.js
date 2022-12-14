import CreateClient from './components/client/CreateClient.vue';
import ReadClient from './components/client/ReadClient.vue';
import Home from './components/home/Home.vue';
import CreateDog from './components/dog/CreateDog.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {path: '/', name: 'home', component: Home},
  {path: '/client', name: 'addClient', component: CreateClient},
  {path: '/client/:id', name: 'getClient', component: ReadClient},
  {path: '/dog', name: 'addDog', component: CreateDog},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
