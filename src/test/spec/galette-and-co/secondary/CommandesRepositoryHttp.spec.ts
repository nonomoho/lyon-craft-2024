import { Commande } from '@/galette-and-co/domain/Commande';
import { Hour } from '@/galette-and-co/domain/time/Hour';
import { Minute } from '@/galette-and-co/domain/time/Minute';
import { Price } from '@/galette-and-co/domain/dishes/Price';
import { toCommandeJson } from '@/galette-and-co/secondary/CommandeJson';
import { CommandeRepositoryHttp } from '@/galette-and-co/secondary/CommandeRepositoryHttp';
import { AxiosHttp } from '@/http/AxiosHttp';
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

  it('should create a commande', async () => {
    const spyPost = vi.fn();
    const axiosHttp = { ...stubAxiosHttp(), post: spyPost };
    const commandeRepository = new CommandeRepositoryHttp(axiosHttp as unknown as AxiosHttp);
    const commande: Commande = {
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

    await commandeRepository.create(commande);

    expect(spyPost).toHaveBeenCalledWith('/lyon-craft-2024/commandes/create', toCommandeJson(commande));
  });
});
