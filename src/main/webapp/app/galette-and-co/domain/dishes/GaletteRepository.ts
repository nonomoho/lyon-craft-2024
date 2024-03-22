import { Galette } from './Galette';

export interface GaletteRepository {
  list(): Promise<Galette[]>;
}
