import { cons } from 'hexlet-pairs';
import { generateNumber, randomArrayValue } from '../utils';
import game from '..';

const description = 'What is the result of the expression?';
const minNumber = 1;
const maxNumber = 10;
const operations = ['+', '-', '*'];

const makeQuiz = () => {
  const num1 = generateNumber(minNumber, maxNumber);
  const num2 = generateNumber(minNumber, maxNumber);
  const operation = randomArrayValue(operations);
  const question = `${num1} ${operation} ${num2}`;

  let result = 0;
  switch (operation) {
    case '+': result = num1 + num2; break;
    case '-': result = num1 - num2; break;
    case '*': result = num1 * num2; break;
    default: break;
  }
  const correctAnswer = String(result);

  return cons(question, correctAnswer);
};

export default () => game(description, makeQuiz);
