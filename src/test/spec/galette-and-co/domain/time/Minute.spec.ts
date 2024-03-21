import { Minute } from '@/galette-and-co/domain/time/Minute';

describe('Hour', () => {
  it('Should throw an error when hour is less than 0', () => {
    expect(() => Minute.of(-1)).toThrow();
  });

  it('Should throw an error when hour is greater than 59', () => {
    expect(() => Minute.of(60)).toThrow();
  });

  it('Should get when valid', () => {
    expect(Minute.of(43).get()).toBe(43);
  });

  it('Should get to human', () => {
    expect(Minute.of(43).toHuman()).toBe('43');
    expect(Minute.of(4).toHuman()).toBe('04');
  });
});
