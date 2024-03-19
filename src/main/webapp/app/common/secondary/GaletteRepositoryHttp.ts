import { AxiosHttp } from '@/http/AxiosHttp';
import { GaletteRepository } from '../domain/GaletteRepository';
import { GaletteJson, toGalette } from './GaletteJson';
import { Galette } from '../domain/Galette';

export class GaletteRepositoryHttp implements GaletteRepository {
  constructor(private axiosHttp: AxiosHttp) {}

  list(): Promise<Galette[]> {
    return this.axiosHttp.get<GaletteJson[]>('/lyon-craft-2024/galettes').then(response => response.data.map(toGalette));
  }
}
