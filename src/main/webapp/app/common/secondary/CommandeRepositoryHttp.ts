import { Commande } from '@/common/domain/Commande';
import { CommandesJson, toCommande } from '@/common/secondary/CommandesJson';
import { AxiosHttp } from '@/http/AxiosHttp';

export class CommandeRepositoryHttp {
  constructor(private axiosHttp: AxiosHttp) {}

  list(): Promise<Commande[]> {
    return this.axiosHttp.get<CommandesJson[]>('/lyon-craft-2024/commandes').then(response => response.data.map(toCommande));
  }
}
