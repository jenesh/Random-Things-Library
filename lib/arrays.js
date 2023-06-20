// Desc: Array generators
import randomNumber, { wordsSizedList } from "./util.js";

export function arrayNumGenerator(min = 0, max = 1, arrSize = 10) {
  let arr = [];
  for (let i = 0; i < arrSize / 2; i++) {
    const positiveNumber = randomNumber(max);
    const negativeNumber = randomNumber(min);

    arr.push(positiveNumber);
    arr.push(negativeNumber);
  }
  return arr;
}

export function arrayStrGenerator(arrSize = 10, strSize = 5) {
  const data = wordsSizedList[strSize];
  let arr = [];
  for (let i = 0; i < arrSize; i++) {
    const str = data[randomNumber(data.length)];
    arr.push(str);
  }
  return arr;
}
