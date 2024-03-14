import { Crepe } from '@/common/domain/Crepe';
import { Price } from '@/common/domain/Price';

export interface CrepeJson {
  price: number;
  ingredients: string[];
}

export const toCrepe = (crepeJson: CrepeJson): Crepe => ({
  price: Price.of(crepeJson.price),
  ingredients: crepeJson.ingredients,
});
