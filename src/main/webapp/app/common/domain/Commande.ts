import { Client } from '@/common/domain/Client';
import { Crepe } from '@/common/domain/Crepe';
import { Galette } from '@/common/domain/Galette';
import { Time } from '@/common/domain/Time';

export interface Commande {
  client: Client;
  crepes: Crepe[];
  galettes: Galette[];
  heureDeRetrait: Time;
}
