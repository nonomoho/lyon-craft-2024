type IngredientSucre = 'sucre' | 'nutella' | 'caramel au beurre salé' | 'beurre';
type Price = number; // methode toHuman (avec euro) et non < 0 et entier uniquement

export interface Crepe {
  price: Price;
  ingredients: IngredientSucre[];
}

type IngredientSale = 'oeuf' | 'jambon' | 'fromage' | 'saucisse de Ploumilliau' | 'ananas';

export interface Galette {
  price: Price;
  ingredients: IngredientSale[];
}
