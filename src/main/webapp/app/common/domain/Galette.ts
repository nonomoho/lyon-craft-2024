import { Price } from './Price';

export type IngredientSale = string;

export interface Galette {
  price: Price;
  ingredients: IngredientSale[];
}
