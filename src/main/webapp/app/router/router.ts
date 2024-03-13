import { CommandesVue } from '@/common/primary/commandes';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/commandes',
    name: 'CommandesVue',
    component: CommandesVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
