import { Commande } from '@/common/domain/Commande';
import { CommandesJson, toCommande } from '@/common/secondary/CommandesJson';
import { AxiosHttp } from '@/http/AxiosHttp';
import { CommandeRepository } from '@/common/domain/CommandeRepository';

export class CommandeRepositoryHttp implements CommandeRepository {
  constructor(private axiosHttp: AxiosHttp) {}

  list(): Promise<Commande[]> {
    return this.axiosHttp.get<CommandesJson[]>('/lyon-craft-2024/commandes').then(response => response.data.map(toCommande));
  }
}
