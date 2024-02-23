import { Price } from './Price';

export type IngredientSucre = 'sucre' | 'nutella' | 'caramel au beurre salé' | 'beurre';

export interface Crepe {
  price: Price;
  ingredients: IngredientSucre[];
}
