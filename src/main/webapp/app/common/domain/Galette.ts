import { Price } from './Price';

export type IngredientSale = 'oeuf' | 'jambon' | 'fromage' | 'saucisse' | 'ananas';

export interface Galette {
  price: Price;
  ingredients: IngredientSale[];
}
