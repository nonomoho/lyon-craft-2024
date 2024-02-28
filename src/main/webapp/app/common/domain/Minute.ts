export class Minute {
  constructor(private minute: number) {
    if (minute < 0 || minute > 59) {
      throw new Error();
    }
  }

  static of(minute: number): Minute {
    return new Minute(minute);
  }

  get(): number {
    return this.minute;
  }

  toHuman(): string {
    const begin = this.minute.toString().length === 1 ? '0' : '';

    return begin + this.minute;
  }
}
