function battleRoyal (people) {
  const nextRound = people.filter((ppl, i) => {
    if (people.length % 2 === 0) {
      return i % 2 === 0
    }
    return i % 2 === 0 && i !== 0
  })

  if (nextRound.length === 1) {
    return nextRound
  }

  return battleRoyal(nextRound)
}

fetch('https://codember.dev/mecenas.json')
  .then(resp => resp.json())
  .then(mecenas => {
    const mecenasId = [...mecenas.keys()]
    const winnerId = battleRoyal(mecenasId)
    console.log(`submit ${mecenas[winnerId]}-${winnerId}`)
  })
