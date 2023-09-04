import readlineSync from 'readline-sync';
import greeting from './cli.js';

const gameProcess = (instructions, gameFunc) => {
  const name = greeting();
  const amountOfRounds = 3;
  let count = 0;
  console.log(instructions);
  while (count !== amountOfRounds) {
    const [question, corRes] = gameFunc();
    console.log(question);
    const answer = readlineSync.question('Your answer: ');

    if (String(answer) === String(corRes)) {
      count += 1;
      console.log('Correct!');
    } else {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${corRes}".\nLet's try again,${name}!`);
      break;
    }
  }

  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default gameProcess;
