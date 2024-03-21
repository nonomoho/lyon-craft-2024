import { Commande } from '@/common/domain/Commande';
import { CommandeJson, toCommande, toCommandeJson } from '@/common/secondary/CommandeJson';
import { AxiosHttp } from '@/http/AxiosHttp';
import { CommandeRepository } from '@/common/domain/CommandeRepository';

export class CommandeRepositoryHttp implements CommandeRepository {
  constructor(private axiosHttp: AxiosHttp) {}

  async list(): Promise<Commande[]> {
    const response = await this.axiosHttp.get<CommandeJson[]>('/lyon-craft-2024/commandes');
    return response.data.map(toCommande);
  }

  async create(commande: Commande): Promise<void> {
    await this.axiosHttp.post<void, CommandeJson>('/lyon-craft-2024/commandes/create', toCommandeJson(commande));
  }
}
