import { CommandeJson } from '@/common/secondary/CommandeJson';

export const commandesFixture: CommandeJson = {
  client: {
    nom: 'nom',
    numero: '0685587326',
  },
  crepes: [
    {
      price: 6,
      ingredients: ['sucre'],
    },
  ],
  galettes: [
    {
      price: 10,
      ingredients: ['oeuf'],
    },
  ],
  heureDeRetrait: '12:30',
};
