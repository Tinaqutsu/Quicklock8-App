// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/SplashScreen.vue';
import Page1 from '../views/MapScreen.vue';
import Page2 from '../views/MesagesScreen';
// import Page3 from '../views/Page3.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/MapScreen',
    name: 'Page1',
    component: Page1,
  },
  {
    path: '/MesagesScreen',
    name: 'Page2',
    component: Page2,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
