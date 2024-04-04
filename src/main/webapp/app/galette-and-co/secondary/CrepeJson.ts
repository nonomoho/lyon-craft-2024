import { Crepe } from '@/galette-and-co/domain/dishes/Crepe';
import { Price } from '@/galette-and-co/domain/dishes/Price';

export interface CrepeJson {
  id: number;
  price: number;
  ingredients: string[];
}

export const toCrepe = (crepeJson: CrepeJson): Crepe => ({
  id: crepeJson.id,
  price: Price.of(crepeJson.price),
  ingredients: crepeJson.ingredients,
});

export const toCrepeJson = (crepe: Crepe): CrepeJson => ({
  id: crepe.id,
  price: crepe.price.get(),
  ingredients: crepe.ingredients,
});
