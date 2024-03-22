import { AddCommandeVue } from '@/galette-and-co/primary/add-commande';
import { CommandesVue } from '@/galette-and-co/primary/commandes';
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
