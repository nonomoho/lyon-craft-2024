import { Commande } from '@/common/domain/Commande';
import { Hour } from '@/common/domain/Hour';
import { Minute } from '@/common/domain/Minute';
import { Price } from '@/common/domain/Price';
import { CommandeRepositoryHttp } from '@/common/secondary/CommandeRepositoryHttp';
import { describe, it, expect } from 'vitest';
import { dataBackendResponse, stubAxiosHttp } from '../../http/AxiosHttpStub';
import { commandesFixture } from './fixture/Commandes.fixture';

describe('CommandesRepositoryHttp', () => {
  it('should list', async () => {
    const axiosHttp = stubAxiosHttp();
    axiosHttp.get.resolves(dataBackendResponse([commandesFixture]));
    const commandeRepository = new CommandeRepositoryHttp(axiosHttp);

    const commandes = await commandeRepository.list();

    const commandeExpected: Commande = {
      client: {
        nom: 'nom',
        numero: '0685587326',
      },
      crepes: [{ price: Price.of(6), ingredients: ['sucre'] }],
      galettes: [{ price: Price.of(10), ingredients: ['oeuf'] }],
      heureDeRetrait: {
        hour: Hour.of(12),
        minute: Minute.of(30),
      },
    };
    expect(commandes).toEqual([commandeExpected]);
  });
});
