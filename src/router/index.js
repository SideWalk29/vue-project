import { createRouter, createWebHistory } from 'vue-router';

// Importar vistas
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ParteC from '@/views/ParteC.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/partec', name: 'Parte C', component: ParteC }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
