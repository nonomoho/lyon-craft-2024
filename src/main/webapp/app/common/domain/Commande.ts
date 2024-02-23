import { Crepe } from '@/common/domain/Crepe';
import { Galette } from '@/common/domain/Galette';
import { Time } from '@/common/domain/Time';

type Nom = string;
type NumeroTelephone = string;

interface Client {
  nom: Nom; // non empty
  numero: NumeroTelephone; // 10 chiffres obligatoires et commence par 0
}

export interface Commande {
  client: Client;
  crepes: Crepe[];
  galettes: Galette[];
  heureDeRetrait: Time;
}
