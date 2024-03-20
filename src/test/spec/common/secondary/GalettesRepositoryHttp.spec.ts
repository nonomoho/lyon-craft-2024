import { Price } from '@/common/domain/Price';
import { describe, it, expect } from 'vitest';
import { dataBackendResponse, stubAxiosHttp } from '../../http/AxiosHttpStub';
import { galettesFixture } from './fixture/Galettes.fixture';
import { GaletteRepositoryHttp } from '@/common/secondary/GaletteRepositoryHttp';
import { Galette } from '@/common/domain/Galette';

describe('GalettesRepositoryHttp', () => {
  it('should list', async () => {
    const axiosHttp = stubAxiosHttp();
    axiosHttp.get.resolves(dataBackendResponse(galettesFixture));
    const galetteRepository = new GaletteRepositoryHttp(axiosHttp);

    const galettes = await galetteRepository.list();

    const galettesExpected: Galette[] = [
      {
        price: Price.of(3),
        ingredients: ['oeuf'],
      },
      {
        price: Price.of(4),
        ingredients: ['jambon', 'oeuf', 'fromage'],
      },
      {
        price: Price.of(4),
        ingredients: ['saucisse'],
      },
    ];

    expect(galettes).toEqual(galettesExpected);
  });
});
