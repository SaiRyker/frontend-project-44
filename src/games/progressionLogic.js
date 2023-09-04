import gameProcess from '../index.js';
import getRandomNum from '../getRandomNum.js';

const instructions = 'What number is missing in the progression?';

const makeProgressionArray = () => {
  const temp = [];
  const lengthOfArr = getRandomNum(6, 10);
  const difference = getRandomNum(1, 30);
  const emptyIndex = getRandomNum(0, lengthOfArr - 1);
  let firstNumber = getRandomNum(0, 100);

  for (let i = 0; i < lengthOfArr; i += 1) {
    temp[i] = firstNumber;
    firstNumber += difference;
  }
  const emptyNumber = temp[emptyIndex];
  temp[emptyIndex] = '..';

  return [temp, emptyNumber];
};

const startGame = () => {
  const [array, result] = makeProgressionArray();
  const question = `Question: ${array}`;
  return [question, result];
};
const mainProcess = () => gameProcess(instructions, startGame);

export default mainProcess;
