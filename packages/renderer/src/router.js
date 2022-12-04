import CreateClient from './components/client/CreateClient.vue';
import ReadClient from './components/client/ReadClient.vue';
import WidgetClient from './components/WidgetClient.vue';
import Coucou from './components/Coucou.vue';
import {createRouter, createWebHashHistory} from 'vue-router';

const routes = [
  {path: '/', name: 'home', component: WidgetClient},
  {path: '/client', name: 'addClient', component: CreateClient},
  {path: '/client/:id', name: 'getClient', component: ReadClient},
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
