// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Login from '../components/Login.vue'; // Adjust the path as necessary

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  // Add other routes here
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
