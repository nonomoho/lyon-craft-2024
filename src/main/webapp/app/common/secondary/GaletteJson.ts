import { Galette } from '@/common/domain/Galette';
import { Price } from '@/common/domain/Price';

export interface GaletteJson {
  price: number;
  ingredients: string[];
}

export const toGalette = (galetteJson: GaletteJson): Galette => ({
  price: Price.of(galetteJson.price),
  ingredients: galetteJson.ingredients,
});
