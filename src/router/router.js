import { createRouter, createWebHistory } from 'vue-router';
import LoginUser from '../components/LoginUser.vue';

const routes = [
  { path: '/login', component: LoginUser }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
