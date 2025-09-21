import { getRandomInt } from './getRandomInt.js'

export const hideElement = (progression) => {
  const hiddenIndex = getRandomInt(0, progression.length - 1)
  const correctAnswer = progression[hiddenIndex]
  const question = [...progression]
  question[hiddenIndex] = '..'

  return { question, correctAnswer, hiddenIndex }
}
