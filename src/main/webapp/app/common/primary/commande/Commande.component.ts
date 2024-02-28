import { COMMANDE_REPOSITORY } from '@/common/domain/CommandeRepository';
import { inject } from 'vue';

export default {
  name: 'CommandeVue',

  setup() {
    const commandeRepository = inject(COMMANDE_REPOSITORY)!;

    return { commandeRepository };
  },
};
