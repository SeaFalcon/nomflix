class ArrayUtilities {
  /* Your magic here */
  static addZeros = numbers => numbers.map(number => Number(`${number}0`));
  static moreThanFifty = numbers => numbers.filter(number => number > 50);
  static removeFirst = numbers => numbers.slice(1, numbers.length);
  static sumAll = numbers => numbers.reduce((prev, next) => prev + next);
  static divide = numbers => `${numbers}`.split("");
  /*
    모범답안

    split은 비추 > 다른 방법
    static divide = numbers => {
      Array.from(`${numbers}`);
      [...`${numbers}]
    }

    static removeFirst = arr => {
      const [, ...rest] = arr;
      return rest;
    };
  */
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const addZeros = ArrayUtilities.addZeros(numbers);
console.log(addZeros);

const moreThanFifty = ArrayUtilities.moreThanFifty(addZeros);
console.log(moreThanFifty);

const noFirst = ArrayUtilities.removeFirst(moreThanFifty);
console.log(noFirst);

const sumAll = ArrayUtilities.sumAll(noFirst);
console.log(sumAll);

const divided = ArrayUtilities.divide(sumAll);
console.log(divided);
