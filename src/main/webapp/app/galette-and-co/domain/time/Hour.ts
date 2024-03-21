export class Hour {
  constructor(private hour: number) {
    if (hour < 0 || hour > 23) {
      throw new Error();
    }
  }

  static of(hour: number): Hour {
    return new Hour(hour);
  }

  get(): number {
    return this.hour;
  }

  toHuman(): string {
    const begin = this.hour.toString().length === 1 ? '0' : '';

    return begin + this.hour;
  }
}
