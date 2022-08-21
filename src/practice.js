const sum = (a,b) => a + b;

const capitalize = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();

const reverseString = (string) => string.split('').reverse().join('');

const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b
};

const ceaserChipher = (str, num) => {
  const shiftChar = char => {
    let charCode = char.charCodeAt(0);
    if (charCode + num > 122) return String.fromCharCode(charCode + num - 26)
    else return String.fromCharCode(charCode + num)
  };

  let chars = str.split("");

  chars.forEach((char, index) => {
    if (/[a-z]/.test(char))
      chars[index] = shiftChar(char);
  });

  return chars.join("");
}

export {sum, capitalize, reverseString, calculator, ceaserChipher};