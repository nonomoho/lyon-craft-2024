import { Price } from '@/common/domain/Price';

describe('Price', () => {
  it('Should have number', () => {
    expect(Price.of(10).get()).toBe(10);
  });

  it('should throw if negative value', () => {
    expect(() => Price.of(-10)).toThrow();
  });

  it('should get to human', () => {
    expect(Price.of(10).toHuman()).toBe('10 €');
  });
});
