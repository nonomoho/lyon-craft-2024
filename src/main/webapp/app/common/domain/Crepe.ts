import { Price } from './Price';

export type IngredientSucre = string;

export interface Crepe {
  price: Price;
  ingredients: IngredientSucre[];
}
