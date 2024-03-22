import { Galette } from '@/galette-and-co/domain/dishes/Galette';
import { Price } from '@/galette-and-co/domain/dishes/Price';

export interface GaletteJson {
  price: number;
  ingredients: string[];
}

export const toGalette = (galetteJson: GaletteJson): Galette => ({
  price: Price.of(galetteJson.price),
  ingredients: galetteJson.ingredients,
});

export const toGaletteJson = (galette: Galette): GaletteJson => ({
  price: galette.price.get(),
  ingredients: galette.ingredients,
});
