import { Client } from '@/galette-and-co/domain/client/Client';
import { Commande } from '@/galette-and-co/domain/Commande';
import { COMMANDE_REPOSITORY } from '@/galette-and-co/domain/CommandeRepository';
import { CREPE_REPOSITORY } from '@/galette-and-co/domain/dishes/CrepeRepository';
import { Hour } from '@/galette-and-co/domain/time/Hour';
import { Minute } from '@/galette-and-co/domain/time/Minute';
import { inject, onMounted, ref } from 'vue';
import { CrepeToDisplay, toCrepeToDisplay } from '../commandes/CommandeToDisplay';
import { Crepe } from '@/galette-and-co/domain/dishes/Crepe';

export default {
  name: 'AddCommandeVue',
  setup() {
    const commandeRepository = inject(COMMANDE_REPOSITORY)!;
    const crepeRepository = inject(CREPE_REPOSITORY)!;
    const crepesToDisplay = ref<CrepeToDisplay[]>([]);
    const selectedCrepes = ref<number[]>([]);
    let crepesAvailable: Crepe[] = [];

    const client = ref<Client>({
      nom: '',
      numero: '',
    });

    onMounted(async () => {
      crepesAvailable = await crepeRepository.list();

      crepesToDisplay.value = crepesAvailable.map(toCrepeToDisplay);
    });

    const create = async (): Promise<void> => {
      const fakeCommande: Commande = {
        client: client.value,
        crepes: selectedCrepes.value.map(id => crepesAvailable.find(crepe => crepe.id === id)!),
        galettes: [],
        heureDeRetrait: {
          hour: Hour.of(12),
          minute: Minute.of(0),
        },
      };
      await commandeRepository.create(fakeCommande);
    };

    return {
      selectedCrepes,
      crepesToDisplay,
      create,
      client,
    };
  },
};
