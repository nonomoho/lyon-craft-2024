export class Price {
  constructor(private price: number) {
    if (price < 0) {
      throw new Error();
    }
  }

  static of(price: number) {
    return new Price(price);
  }

  get() {
    return this.price;
  }

  toHuman() {
    return `${this.price} €`;
  }
}
