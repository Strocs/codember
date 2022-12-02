const MIN_NUM = 11098
const MAX_NUM = 98123

const validos = []
for (let i = MIN_NUM; i <= MAX_NUM; i++) {
  const number = i.toString()
  if ([...number.matchAll('5')].length < 2) continue
  let isValid = false
  for (let j = 0; j <= number.length; j++) {
    if (number[j] > number[j + 1]) {
      isValid = false
      break
    }
    isValid = true
  }
  if (!isValid) continue
  validos.push(i)
}

console.log(`submit ${validos.length}-${validos[55]}`)
