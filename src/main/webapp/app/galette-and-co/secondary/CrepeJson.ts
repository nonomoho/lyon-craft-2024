import { Crepe } from '@/galette-and-co/domain/dishes/Crepe';
import { Price } from '@/galette-and-co/domain/dishes/Price';

export interface CrepeJson {
  price: number;
  ingredients: string[];
}

export const toCrepe = (crepeJson: CrepeJson): Crepe => ({
  price: Price.of(crepeJson.price),
  ingredients: crepeJson.ingredients,
});

export const toCrepeJson = (crepe: Crepe): CrepeJson => ({
  price: crepe.price.get(),
  ingredients: crepe.ingredients,
});
