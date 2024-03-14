import { COMMANDE_REPOSITORY } from '@/common/domain/CommandeRepository';
import { CommandeRepositoryHttp } from '@/common/secondary/CommandeRepositoryHttp';
import { createApp } from 'vue';
import { AppVue } from './common/primary/app';
import router from './router/router';
import { AxiosHttp } from './http/AxiosHttp';
import axios from 'axios';
// jhipster-needle-main-ts-import

const app = createApp(AppVue);
app.use(router);
// jhipster-needle-main-ts-provider
const axiosHttp = new AxiosHttp(axios.create());
app.provide(COMMANDE_REPOSITORY, new CommandeRepositoryHttp(axiosHttp));
app.mount('#app');
