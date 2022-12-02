import { readFileSync } from 'fs'

// { 'red', 'blue', 'green', 'gray', 'pink' }

const colors = readFileSync('challenge03/colors.txt', 'utf-8')

const colorsToArray = colors
  .slice(1, colors.length - 1)
  .replaceAll('"', '')
  .trim()
  .split(',')
  .map(color => color.trim())



let zebraLength;
let lastColor;
const result = colorsToArray.reduce((acc, prev) => console.log(acc, prev))

// console.log(colorsToArray)
console.log(zebraLength + '@' + lastColor)
