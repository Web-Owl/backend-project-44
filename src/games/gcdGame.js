import { getRandomInt } from '../utils/getRandomInt.js'
import { gcd } from '../utils/gcd.js'

function generateQuestion() {
  const x = Math.abs(getRandomInt(0, 100))
  const y = Math.abs(getRandomInt(0, 100))
  const question = `${x} ${y}`
  const correctAnswer = gcd(x, y)

  return { question, correctAnswer }
}

export { generateQuestion }
