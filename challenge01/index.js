import { readFileSync } from 'fs'

const data = readFileSync('challenge01/users.txt','utf-8')

const processedData = data.split('\n\n')
                          .map(user => 
                            user.replaceAll('\n', ' ')
                                .split(' ')
                                .map(entry => entry.split(':'))
                          )
                          .map(user => Object.fromEntries(user))


const validUsers = (users) => {
  let totalValid = 0;
  let lastUserValid = '';
  users.forEach(user => {
      if (user.usr && user.eme && user.psw && user.age && user.loc && user.fll) {
            totalValid++
            lastUserValid = user.usr
          }
  })

  return totalValid+lastUserValid
}

console.log(validUsers(processedData))
