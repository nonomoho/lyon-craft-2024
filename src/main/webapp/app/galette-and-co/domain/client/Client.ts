import { Nom } from '@/galette-and-co/domain/client/Nom';
import { NumeroTelephone } from '@/galette-and-co/domain/client/NumeroTelephone';

export interface Client {
  nom: Nom;
  numero: NumeroTelephone;
}
