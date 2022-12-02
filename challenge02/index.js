// if 97 to 122 lowercase

import { readFileSync } from 'fs'

const encrypted = readFileSync('challenge02/encrypted.txt', 'utf-8')

const wordsEncrypted = encrypted.split(' ')
                                .map(word => {
                                  let wordArray = []
                                  for (let i = 0; i < word.length;) {
                                    if (word[i] === '9' || word[i] === '8' || word[i] === '7' || word[i] === '6' || word[i] === '5' || word[i] === '4') {
                                      wordArray.push(word.slice(i, i + 2))
                                      i = i + 2
                                    } else {
                                      wordArray.push(word.slice(i, i + 3))
                                      i = i + 3
                                    }
                                  }
                                  return wordArray
                                })

const letterDeciphered = wordsEncrypted.map(word => {
                                          let letters = ''
                                          word.map(letter => {
                                            letters += (String.fromCharCode(letter))
                                          })
                                          return letters
                                        })
                                        .join()
                                        .replaceAll(',', ' ')

console.log(letterDeciphered)