import { Price } from './Price';

export type IngredientSale = string;

export interface Galette {
  id: number;
  price: Price;
  ingredients: IngredientSale[];
}
