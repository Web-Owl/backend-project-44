import { getRandomInt } from '../utils/getRandomInt.js'
import { isPrime } from '../utils/isPrime.js'

function generateQuestion() {
  const number = getRandomInt(0, 100)
  const question = `${number}`
  const correctAnswer = isPrime(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

export { generateQuestion }
