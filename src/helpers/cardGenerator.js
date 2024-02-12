import {
  TOTAL_NUMBER_OF_CARDS,
  NUMBER_OF_CARDS_DRAWN,
} from "../config/AppConfig";
import { v4 as uuidv4 } from "uuid";

const generateCards = (unpicked) => {
  let _numbers = generateRandomNumbers();
  _numbers = insertNonLosingNumber(_numbers, unpicked);
  return _numbers.map((number) => ({ key: uuidv4(), number }));
};

const generateRandomNumbers = () => {
  let _numbers = [];
  for (let n = 0; n < NUMBER_OF_CARDS_DRAWN; n++) {
    _numbers.push(Math.ceil(Math.random() * TOTAL_NUMBER_OF_CARDS));
  }
  return _numbers;
};

const insertNonLosingNumber = (_numbers, unpicked) => {
  const unpickedIndex = Math.floor(Math.random() * unpicked.length);
  const unpickedNumber = unpicked[unpickedIndex];
  const numbersIndex = Math.floor(Math.random() * _numbers.length);
  return [
    ..._numbers.slice(0, numbersIndex),
    unpickedNumber,
    ..._numbers.slice(numbersIndex + 1),
  ];
};

export default generateCards;
