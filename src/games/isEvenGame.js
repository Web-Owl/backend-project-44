import { getRandomInt } from '../utils/getRandomInt.js'
import { isEven } from '../utils/isEven.js'

function generateQuestion() {
  const number = getRandomInt(0, 100)
  const question = `${number}`
  const correctAnswer = isEven(number) ? 'yes' : 'no'

  return { question, correctAnswer }
}

export { generateQuestion }
