import { Commande } from '@/common/domain/Commande';
import { Hour } from '@/common/domain/Hour';
import { Minute } from '@/common/domain/Minute';
import { Time } from '@/common/domain/Time';
import { ClientJson, toClient } from '@/common/secondary/ClientJson';
import { CrepeJson, toCrepe, toCrepeJson } from '@/common/secondary/CrepeJson';
import { GaletteJson, toGalette, toGaletteJson } from '@/common/secondary/GaletteJson';

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
