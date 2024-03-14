import { Nom } from '@/common/domain/Nom';
import { NumeroTelephone } from '@/common/domain/NumeroTelephone';

export interface Client {
  nom: Nom;
  numero: NumeroTelephone;
}
