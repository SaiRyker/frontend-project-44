import readlineSync from 'readline-sync';
import greeting from '../cli.js';

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
  const name = greeting();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  let count = 0;
  while (count !== 3) {
    const number = Math.floor(Math.random() * (100 - 1) + 1);

    console.log(`Question ${number}`);

    const answer = readlineSync.question('Your answer: ');

    const even = isEven(number);

    if (even === answer) {
      console.log('Correct!');
      count += 1;
    } else if ((even !== answer) || (answer !== 'yes' && answer !== 'no')) {
      console.log(`"${answer}" is wrong answer ;(. Correct answer was "${even}"\nLet's try again,${name}`);
      break;
    }
  }

  if (count === 3) {
    console.log(`Congratulations, ${name}!`);
  }
};

export default startGame;
