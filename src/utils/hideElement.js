import { getRandomInt } from './getRandomInt.js'

export const hideElement = (progression) => {
  const hiddenIndex = getRandomInt(0, progression.length - 1)
  const correctAnswer = progression[hiddenIndex]
  const visibleLeft = progression.slice(0, hiddenIndex).join(' ')
  const visibleRight = progression.slice(hiddenIndex + 1).join(' ')

  return {
    question: `${visibleLeft} .. ${visibleRight}`.trim(),
    correctAnswer,
    hiddenIndex,
  }
}
