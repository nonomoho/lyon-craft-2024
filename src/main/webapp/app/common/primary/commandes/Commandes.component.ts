import { COMMANDE_REPOSITORY } from '@/common/domain/CommandeRepository';
import { inject, onMounted, ref } from 'vue';
import { toCommandeToDisplay, CommandeToDisplay } from './CommandeToDisplay';

export default {
  name: 'CommandesVue',
  setup() {
    const commandeRepository = inject(COMMANDE_REPOSITORY)!;
    const commandes = ref<CommandeToDisplay[]>([]);

    onMounted(async () => {
      commandes.value = (await commandeRepository.list()).map(toCommandeToDisplay);
    });

    return { commandeRepository, commandes };
  },
};
