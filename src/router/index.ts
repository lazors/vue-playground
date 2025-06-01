import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Consultation from '../views/Consultation.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/consultation', name: 'Consultation', component: Consultation },
  ],
});
