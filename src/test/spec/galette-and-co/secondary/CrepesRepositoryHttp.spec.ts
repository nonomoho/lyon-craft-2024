import { Price } from '@/galette-and-co/domain/dishes/Price';
import { describe, it, expect } from 'vitest';
import { dataBackendResponse, stubAxiosHttp } from '../../http/AxiosHttpStub';
import { crepesFixture } from './fixture/Crepes.fixture';
import { CrepeRepositoryHttp } from '@/galette-and-co/secondary/CrepeRepositoryHttp';
import { Crepe } from '@/galette-and-co/domain/dishes/Crepe';

describe('CrepesRepositoryHttp', () => {
  it('should list', async () => {
    const axiosHttp = stubAxiosHttp();
    axiosHttp.get.resolves(dataBackendResponse(crepesFixture));
    const crepeRepository = new CrepeRepositoryHttp(axiosHttp);

    const crepes = await crepeRepository.list();

    const crepesExpected: Crepe[] = [
      {
        id: 1,
        price: Price.of(2),
        ingredients: ['sucre'],
      },
      {
        id: 2,
        price: Price.of(3),
        ingredients: ['beurre', 'sucre'],
      },
      {
        id: 3,
        price: Price.of(3),
        ingredients: ['sucre', 'citron'],
      },
      {
        id: 4,
        price: Price.of(3),
        ingredients: ['caramel'],
      },
    ];

    expect(crepes).toEqual(crepesExpected);
  });
});
