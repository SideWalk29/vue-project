import { createRouter, createWebHistory } from 'vue-router';

// Importar vistas
import HomeView from '@/views/HomeView.vue';
import AboutView from '@/views/AboutView.vue';
import ParteC from '@/views/ParteC.vue';
import ParteD from '@/views/ParteD.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/about', name: 'About', component: AboutView },
  { path: '/partec', name: 'Parte C', component: ParteC },
  { path: '/parted', name: 'Parte D', component: ParteD }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
