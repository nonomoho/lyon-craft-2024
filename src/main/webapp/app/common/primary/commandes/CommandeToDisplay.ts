import { Commande } from '@/common/domain/Commande';
import { Crepe } from '@/common/domain/Crepe';
import { Galette } from '@/common/domain/Galette';

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
  price: string;
  ingredients: string[];
}

export interface GaletteToDisplay {
  price: string;
  ingredients: string[];
}

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
  price: crepe.price.toHuman(),
  ingredients: crepe.ingredients,
});

export const toGaletteToDisplay = (galette: Galette): GaletteToDisplay => ({
  price: galette.price.toHuman(),
  ingredients: galette.ingredients,
});
