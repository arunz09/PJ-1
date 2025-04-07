import { createApp } from 'vue';
import App from './app.vue';
import { createRouter, createWebHistory } from 'vue-router';
import AdminView from './views/adminView.vue';
import StudentView from './views/studentView.vue';

const routes = [
  { path: '/', component: StudentView },
  { path: '/admin', component: AdminView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

createApp(App).use(router).mount('#app');