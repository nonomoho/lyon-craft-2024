import { Commande } from '@/galette-and-co/domain/Commande';
import { Hour } from '@/galette-and-co/domain/time/Hour';
import { Minute } from '@/galette-and-co/domain/time/Minute';
import { Time } from '@/galette-and-co/domain/time/Time';
import { ClientJson, toClient } from '@/galette-and-co/secondary/ClientJson';
import { CrepeJson, toCrepe, toCrepeJson } from '@/galette-and-co/secondary/CrepeJson';
import { GaletteJson, toGalette, toGaletteJson } from '@/galette-and-co/secondary/GaletteJson';

export interface CommandeJson {
  client: ClientJson;
  crepes: CrepeJson[];
  galettes: GaletteJson[];
  heureDeRetrait: string;
}

export const toCommande = (commandeJson: CommandeJson): Commande => ({
  client: toClient(commandeJson.client),
  crepes: commandeJson.crepes.map(toCrepe),
  galettes: commandeJson.galettes.map(toGalette),
  heureDeRetrait: toTime(commandeJson.heureDeRetrait),
});

const toTime = (timeJson: string): Time => {
  const deconstructTime = timeJson.split(':');
  return {
    hour: Hour.of(+deconstructTime[0]),
    minute: Minute.of(+deconstructTime[1]),
  };
};

export const toCommandeJson = (commande: Commande): CommandeJson => ({
  client: toClient(commande.client),
  crepes: commande.crepes.map(toCrepeJson),
  galettes: commande.galettes.map(toGaletteJson),
  heureDeRetrait: commande.heureDeRetrait.hour.toHuman() + ':' + commande.heureDeRetrait.minute.toHuman(),
});
