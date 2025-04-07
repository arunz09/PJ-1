import { createRouter, createWebHistory } from 'vue-router';
import StudentView from '../views/studentView.vue';
import AdminView from '../views/adminView.vue';

const routes = [
  { path: '/', component: StudentView },
  { path: '/admin', component: AdminView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;