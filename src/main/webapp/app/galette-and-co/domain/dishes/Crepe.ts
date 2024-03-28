import { Price } from './Price';

export type IngredientSucre = string;

export interface Crepe {
  id: number;
  price: Price;
  ingredients: IngredientSucre[];
}
