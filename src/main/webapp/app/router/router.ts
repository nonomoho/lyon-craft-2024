import { AddCommandeVue } from '@/common/primary/commande';
import { CommandesVue } from '@/common/primary/commandes';
import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/commandes',
    name: 'CommandesVue',
    component: CommandesVue,
  },
  {
    path: '/commandes/add',
    name: 'AddCommandeVue',
    component: AddCommandeVue,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
