import { getRandomInt } from './getRandomInt.js'

const MIN_LENGTH = 5
const MAX_LENGTH = 10

export const generateProgression = () => {
  const length = getRandomInt(MIN_LENGTH, MAX_LENGTH)
  const start = getRandomInt(1, 20)
  const step = getRandomInt(1, 10)
  const progression = []

  for (let i = 0; i < length; i++) {
    progression.push(start + i * step)
  }

  return { progression, start, step }
}
