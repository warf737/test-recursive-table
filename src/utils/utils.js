import { ID_RANGE } from './constants';

export const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

export const generateRandomId = () => {
  return getRandomInt(ID_RANGE.MIN, ID_RANGE.MAX);
};


