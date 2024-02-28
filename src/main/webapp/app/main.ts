import { COMMANDE_REPOSITORY } from '@/common/domain/CommandeRepository';
import { CommandeRepositoryInMemory } from '@/common/secondary/CommandeRepositoryInMemory';
import { createApp } from 'vue';
import { AppVue } from './common/primary/app';
import router from './router/router';
// jhipster-needle-main-ts-import

const app = createApp(AppVue);
app.use(router);
// jhipster-needle-main-ts-provider
app.provide(COMMANDE_REPOSITORY, new CommandeRepositoryInMemory());
app.mount('#app');
