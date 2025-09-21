import { getRandomInt } from '../utils/getRandomInt.js'
const operations = ['+', '-', '*']

function generateQuestion() {
  const num1 = getRandomInt(1, 20)
  const num2 = getRandomInt(1, 20)
  const operation = operations[getRandomInt(0, operations.length - 1)]
  const question = `${num1} ${operation} ${num2}`

  let correctAnswer
  switch (operation) {
    case '+': correctAnswer = num1 + num2
      break
    case '-': correctAnswer = num1 - num2
      break
    case '*': correctAnswer = num1 * num2
      break
  }

  return { question, correctAnswer }
}

export { generateQuestion }
