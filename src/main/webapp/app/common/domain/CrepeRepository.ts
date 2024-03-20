import { InjectionKey } from 'vue';
import { Crepe } from './Crepe';

export const CREPE_REPOSITORY: InjectionKey<CrepeRepository> = Symbol('Crepe repository');

export interface CrepeRepository {
  list(): Promise<Crepe[]>;
}
