// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import LoginUser from '../components/LoginUser.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: LoginUser
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
