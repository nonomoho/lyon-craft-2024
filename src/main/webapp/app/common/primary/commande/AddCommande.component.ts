import { CREPE_REPOSITORY } from '@/common/domain/CrepeRepository';
import { inject, onMounted, ref } from 'vue';
import { CrepeToDisplay, toCrepeToDisplay } from '../commandes/CommandeToDisplay';

export default {
  name: 'AddCommandeVue',
  setup() {
    const crepeRepository = inject(CREPE_REPOSITORY)!;
    const crepesAvailable = ref<CrepeToDisplay[]>([]);

    onMounted(async () => {
      crepesAvailable.value = (await crepeRepository.list()).map(toCrepeToDisplay);
    });

    return {
      crepesAvailable,
    };
  },
};
