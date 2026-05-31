const { multiply } = require('../src/calculator');

describe('multiply', () => {
  test('should multiply two positive numbers correctly', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test('should multiply a positive and a negative number correctly', () => {
    expect(multiply(5, -2)).toBe(-10);
  });

  test('should multiply two negative numbers correctly', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test('should multiply by zero correctly', () => {
    expect(multiply(10, 0)).toBe(0);
  });

  test('should handle floating point numbers', () => {
    expect(multiply(2.5, 2)).toBe(5);
  });
});
