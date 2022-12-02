import { readFileSync } from 'fs'

const data = readFileSync('challenge03/colors.txt', 'utf-8')
const colorsArray = JSON.parse(data)

const longestColorsZebra = (colorsArray) => {
  let longestZebra = 0;
  let lastColor = '';
  let zebraArray = [colorsArray[0]];

  const end = () =>
  zebraArray.length >= longestZebra
      ? [zebraArray.length, zebraArray.at(-1)]
      : [longestZebra, lastColor];

  for (let color of colorsArray) {
    if (zebraArray.length === 1 && zebraArray[0] === color) continue
    if (zebraArray.length < 2 || zebraArray.at(-2) === color) {
      zebraArray.push(color)
      continue
    }
    [longestZebra, lastColor] = end()
    zebraArray = [zebraArray.at(-1), color]
  }
  
  [longestZebra, lastColor] = end();
  return [longestZebra, lastColor];
};

console.log(longestColorsZebra(colorsArray))