import { COMMANDE_REPOSITORY } from '@/galette-and-co/domain/CommandeRepository';
import { CommandeRepositoryHttp } from '@/galette-and-co/secondary/CommandeRepositoryHttp';
import { createApp } from 'vue';
import { AppVue } from './common/primary/app';
import router from './router/router';
import { AxiosHttp } from './http/AxiosHttp';
import axios from 'axios';
import { CREPE_REPOSITORY } from './galette-and-co/domain/dishes/CrepeRepository';
import { CrepeRepositoryHttp } from './galette-and-co/secondary/CrepeRepositoryHttp';
// jhipster-needle-main-ts-import

const app = createApp(AppVue);
app.use(router);
// jhipster-needle-main-ts-provider
const axiosHttp = new AxiosHttp(axios.create());
app.provide(COMMANDE_REPOSITORY, new CommandeRepositoryHttp(axiosHttp));
app.provide(CREPE_REPOSITORY, new CrepeRepositoryHttp(axiosHttp));
app.mount('#app');
