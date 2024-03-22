import { Client } from '@/galette-and-co/domain/client/Client';
import { Crepe } from '@/galette-and-co/domain/dishes/Crepe';
import { Galette } from '@/galette-and-co/domain/dishes/Galette';
import { Time } from '@/galette-and-co/domain/time/Time';

export interface Commande {
  client: Client;
  crepes: Crepe[];
  galettes: Galette[];
  heureDeRetrait: Time;
}
