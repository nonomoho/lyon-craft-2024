import { Galette } from '@/galette-and-co/domain/dishes/Galette';
import { Price } from '@/galette-and-co/domain/dishes/Price';

export interface GaletteJson {
  id: number;
  price: number;
  ingredients: string[];
}

export const toGalette = (galetteJson: GaletteJson): Galette => ({
  id: galetteJson.id,
  price: Price.of(galetteJson.price),
  ingredients: galetteJson.ingredients,
});

export const toGaletteJson = (galette: Galette): GaletteJson => ({
  id: galette.id,
  price: galette.price.get(),
  ingredients: galette.ingredients,
});
