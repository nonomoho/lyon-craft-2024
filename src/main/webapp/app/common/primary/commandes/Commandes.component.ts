import { COMMANDE_REPOSITORY } from '@/common/domain/CommandeRepository';
import { inject, onMounted, ref } from 'vue';
import { toCommandeToDisplay, CommandeToDisplay } from './CommandeToDisplay';
import router from '@/router/router';

export default {
  name: 'CommandesVue',
  setup() {
    const commandeRepository = inject(COMMANDE_REPOSITORY)!;
    const commandes = ref<CommandeToDisplay[]>([]);

    onMounted(async () => {
      commandes.value = (await commandeRepository.list()).map(toCommandeToDisplay);
    });

    const addCommande = () => {
      router.push('/commandes/add');
    };

    return { commandeRepository, commandes, addCommande };
  },
};
