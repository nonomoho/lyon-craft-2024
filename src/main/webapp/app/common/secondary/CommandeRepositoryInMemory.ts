import { Commande } from '@/common/domain/Commande';
import { CommandeRepository } from '@/common/domain/CommandeRepository';

export class CommandeRepositoryInMemory implements CommandeRepository {
  list(): Commande[] {
    return [];
  }
}
