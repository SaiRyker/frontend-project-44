import gameProcess from '../index.js';
import getRandomNum from '../getRandomNum.js';

const instructions = 'Answer "yes" if the number is even, otherwise answer "no".';
// eslint-disable-next-line consistent-return
const isEven = (number) => {
  if (number % 2 === 0) {
    return 'yes';
  }

  if (number % 2 !== 0) {
    return 'no';
  }
};

const startGame = () => {
  const number = getRandomNum(0, 100);
  const question = `Question ${number}`;
  const even = isEven(number);

  return [question, even];
};

const mainProcess = () => gameProcess(instructions, startGame);

export default mainProcess;
