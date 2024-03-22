import { Client } from '@/galette-and-co/domain/client/Client';

export interface ClientJson {
  nom: string;
  numero: string;
}

export const toClient = (clientJson: ClientJson): Client => ({
  nom: clientJson.nom,
  numero: clientJson.numero,
});
