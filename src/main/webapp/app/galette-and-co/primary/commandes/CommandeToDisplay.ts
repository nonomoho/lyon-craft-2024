import { Commande } from '@/galette-and-co/domain/Commande';
import { Crepe } from '@/galette-and-co/domain/dishes/Crepe';
import { Galette } from '@/galette-and-co/domain/dishes/Galette';

export interface CommandeToDisplay {
  client: {
    nom: string;
    numero: string;
  };
  crepes: CrepeToDisplay[];
  galettes: GaletteToDisplay[];
  heureDeRetrait: string;
}

export interface CrepeToDisplay {
  id: number;
  description: string;
}

export interface GaletteToDisplay {
  id: number;
  description: string;
}

type Dish = Crepe | Galette;

const dishToDisplay = (dish: Dish): string => {
  const ingredients = dish.ingredients.join('/');

  return `price: ${dish.price.toHuman()}, ingredients: ${ingredients}`;
};

export const toCommandeToDisplay = (commande: Commande): CommandeToDisplay => ({
  client: {
    nom: commande.client.nom,
    numero: commande.client.numero,
  },
  crepes: commande.crepes.map(toCrepeToDisplay),
  galettes: commande.galettes.map(toGaletteToDisplay),
  heureDeRetrait: `${commande.heureDeRetrait.hour.toHuman()}:${commande.heureDeRetrait.minute.toHuman()}`,
});

export const toCrepeToDisplay = (crepe: Crepe): CrepeToDisplay => ({
  id: crepe.id,
  description: dishToDisplay(crepe),
});

export const toGaletteToDisplay = (galette: Galette): GaletteToDisplay => ({
  id: galette.id,
  description: dishToDisplay(galette),
});
