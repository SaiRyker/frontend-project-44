import gameProcess from '../index.js';
import getRandomNum from '../getRandomNum.js';

const instructions = 'Find the greatest common divisor of given numbers.';

const nod = (num1, num2) => {
  let temp1 = num1;
  let temp2 = num2;

  while (temp1 !== 0 && temp2 !== 0) {
    if (temp1 > temp2) {
      temp1 %= temp2;
    } else if (temp1 < temp2) {
      temp2 %= temp1;
    }
  }
  return temp1 + temp2;
};

const startGame = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(0, 100);
  const question = `Question: ${num1} ${num2}`;
  const result = nod(num1, num2);
  return [question, result];
};

const mainProcess = () => gameProcess(instructions, startGame);

export default mainProcess;
