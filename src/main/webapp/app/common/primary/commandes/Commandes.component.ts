import { COMMANDE_REPOSITORY } from '@/common/domain/CommandeRepository';
import { inject } from 'vue';

export default {
  name: 'CommandesVue',

  setup() {
    const commandeRepository = inject(COMMANDE_REPOSITORY)!;

    return { commandeRepository };
  },
};
