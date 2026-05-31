const { add, subtract, multiply, divide } = require('../src/calculator');

describe('calculator', () => {
  test('add', () => {
    expect(add(1, 2)).toBe(3);
  });

  test('subtract', () => {
    expect(subtract(5, 2)).toBe(3);
  });

  test('multiply', () => {
    expect(multiply(2, 3)).toBe(6);
  });

  describe('divide', () => {
    test('should divide two numbers correctly', () => {
      expect(divide(6, 2)).toBe(3);
    });

    test('should throw an error when dividing by zero', () => {
      expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
    });
  });
});
