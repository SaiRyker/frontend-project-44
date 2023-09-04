import getRandomNum from '../getRandomNum.js';
import gameProcess from '../index.js';

const instructions = 'What is the result of the expression?';

const getResult = (min, max, selectedOperator) => {
  switch (selectedOperator) {
    case '+':
      return max + min;
    case '-':
      return max - min;
    case '*':
      return max * min;
    default:
      return null;
  }
};

const startGame = () => {
  const operators = ['+', '-', '*'];
  const [min, max] = [getRandomNum(0, 100), getRandomNum(0, 100)].sort();
  const selectedOperator = operators[getRandomNum(0, 3)];
  const question = `Question: ${max} ${selectedOperator} ${min}`;
  const result = getResult(min, max, selectedOperator);

  return [question, result];
};

const mainProcess = () => gameProcess(instructions, startGame);

export default mainProcess;
