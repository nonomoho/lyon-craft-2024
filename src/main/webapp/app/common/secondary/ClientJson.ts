import { Client } from '@/common/domain/Client';

export interface ClientJson {
  nom: string;
  numero: string;
}

export const toClient = (clientJson: ClientJson): Client => ({
  nom: clientJson.nom,
  numero: clientJson.numero,
});
