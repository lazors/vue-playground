import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Consultation from '../views/Consultation.vue';
import Settings from '../views/Settings.vue';
import Feedback from '../views/Feedback.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/consultation', name: 'Consultation', component: Consultation },
    { path: '/settings', name: 'Settings', component: Settings },
    { path: '/feedback', name: 'Feedback', component: Feedback },
  ],
});
