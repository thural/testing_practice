const sum = (a,b) => a + b;

const capitalize = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

const reverseString = (string) => string.split('').reverse().join('');

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b
}

export {sum, capitalize, reverseString, calculator};