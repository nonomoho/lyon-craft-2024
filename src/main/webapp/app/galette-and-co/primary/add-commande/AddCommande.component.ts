import { Client } from '@/galette-and-co/domain/client/Client';
import { Commande } from '@/galette-and-co/domain/Commande';
import { COMMANDE_REPOSITORY } from '@/galette-and-co/domain/CommandeRepository';
import { CREPE_REPOSITORY } from '@/galette-and-co/domain/dishes/CrepeRepository';
import { Hour } from '@/galette-and-co/domain/time/Hour';
import { Minute } from '@/galette-and-co/domain/time/Minute';
import router from '@/router/router';
import { inject, onMounted, ref } from 'vue';
import { CrepeToDisplay, toCrepeToDisplay } from '../commandes/CommandeToDisplay';

export default {
  name: 'AddCommandeVue',
  setup() {
    const commandeRepository = inject(COMMANDE_REPOSITORY)!;
    const crepeRepository = inject(CREPE_REPOSITORY)!;
    const crepesAvailable = ref<CrepeToDisplay[]>([]);

    const client = ref<Client>({
      nom: '',
      numero: '',
    });

    onMounted(async () => {
      crepesAvailable.value = (await crepeRepository.list()).map(toCrepeToDisplay);
    });

    const create = async (): Promise<void> => {
      const fakeCommande: Commande = {
        client: client.value,
        crepes: [],
        galettes: [],
        heureDeRetrait: {
          hour: Hour.of(12),
          minute: Minute.of(0),
        },
      };
      await commandeRepository.create(fakeCommande);
      await router.push('/commandes');
    };

    return {
      crepesAvailable,
      create,
      client,
    };
  },
};
