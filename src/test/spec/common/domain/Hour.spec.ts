import { Hour } from '@/common/domain/Hour';

describe('Hour', () => {
  it('Should throw an error when hour is less than 0', () => {
    expect(() => Hour.of(-1)).toThrow();
  });

  it('Should throw an error when hour is greater than 23', () => {
    expect(() => Hour.of(24)).toThrow();
  });

  it('Should get when valid', () => {
    expect(Hour.of(12).get()).toBe(12);
  });

  it('Should get to human', () => {
    expect(Hour.of(12).toHuman()).toBe('12');
    expect(Hour.of(4).toHuman()).toBe('04');
  });
});
