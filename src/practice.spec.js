import {
  sum,
  capitalize,
  reverseString,
  calculator,
  ceaserChipher,
  analyzeArray
} from './practice';

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('heLLo to equal Hello', () => {
  expect(capitalize('heLLo')).toBe('Hello');
});

test('apple to equal elppa', () => {
  expect(reverseString('apple')).toBe('elppa');
});

describe('calculator', () => {
  test(`calculator has keys ['add','subtract','divide','multiply' ]`, () => {
    expect(Object.keys(calculator)).toEqual(['add','subtract','divide','multiply' ]);
  });
  test('adds up numbers', () => {
    expect(calculator.add(1,2)).toBe(3);
  });
  test('subtracts numbers', () => {
    expect(calculator.subtract(3,2)).toBe(1);
  });
  test('divides numbers', () => {
    expect(calculator.divide(9,3)).toBe(3);
  });
  test('multiplies numbers', () => {
    expect(calculator.multiply(9,3)).toBe(27)
  })
});

describe('ceaser chipher', () => {
  test('"apple" to equal "dssoh"', () => {
    expect(ceaserChipher('apple',3)).toBe('dssoh')
  })
});

describe('array analyzer', () => {
  test('avarege [1, 2, 3, 4, 5] to equal 3', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).avarege).toBe(3)
  });
  test('min [1, 2, 3, 4, 5] to equal 1', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).min).toBe(1)
  });
  test('max [1, 2, 3, 4, 5] to equal 1', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).max).toBe(5)
  });
  test('length [1, 2, 3, 4, 5] to equal 5', () => {
    expect(analyzeArray([1, 2, 3, 4, 5]).length).toBe(5)
  })
})