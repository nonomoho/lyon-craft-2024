import { AxiosHttp } from '@/http/AxiosHttp';
import { CrepeRepository } from '../domain/CrepeRepository';
import { CrepeJson, toCrepe } from './CrepeJson';
import { Crepe } from '../domain/Crepe';

export class CrepeRepositoryHttp implements CrepeRepository {
  constructor(private axiosHttp: AxiosHttp) {}

  list(): Promise<Crepe[]> {
    return this.axiosHttp.get<CrepeJson[]>('/lyon-craft-2024/crepes').then(response => response.data.map(toCrepe));
  }
}
