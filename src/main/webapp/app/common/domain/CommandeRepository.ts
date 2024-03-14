import { Commande } from '@/common/domain/Commande';
import { InjectionKey } from 'vue';

export const COMMANDE_REPOSITORY: InjectionKey<CommandeRepository> = Symbol('Commande repository');

export interface CommandeRepository {
  list(): Promise<Commande[]>;
}
