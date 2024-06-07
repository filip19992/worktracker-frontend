import { createRouter, createWebHistory } from 'vue-router';
import LoginUser from '../components/LoginUser.vue';
import TodoPage from '../components/TodoPage.vue';
import RegisterUser from '../components/RegisterUser.vue';

const routes = [
  { path: '/login', component: LoginUser },
  { path: '/todos', component: TodoPage},
  { path: '/register', component: RegisterUser}
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
