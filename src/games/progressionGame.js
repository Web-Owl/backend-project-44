import { generateProgression } from '../utils/generateProgression.js'
import { hideElement } from '../utils/hideElement.js'

function generateQuestion() {
  const { progression } = generateProgression()
  const { question, correctAnswer } = hideElement(progression)

  return { question, correctAnswer }
}

export { generateQuestion }
