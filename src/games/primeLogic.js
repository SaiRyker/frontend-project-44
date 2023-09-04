import gameProcess from '../index.js';
import getRandomNum from '../getRandomNum.js';

const instructions = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const startGame = () => {
  const number = getRandomNum(0, 300);
  const result = isPrime(number);
  const question = `Question: ${number}`;
  if (result === true) {
    return [question, 'yes'];
  }

  return [question, 'no'];
};

const mainProcess = () => gameProcess(instructions, startGame);

export default mainProcess;
