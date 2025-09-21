import readlineSync from 'readline-sync'
import { getRandom } from '../utils/getRandom.js'
import { isEven } from '../utils/isEven.js'
import { userName } from '../utils/userName.js'

function playEvenGame() {
  console.log('Answer "yes" if the number is even, otherwise answer "no".')

  let correctCount = 0
  const correctAnswersNeeded = 3

  while (correctCount < correctAnswersNeeded) {
    const number = getRandom(0, 100)
    console.log(`Question: ${number}`)

    const input = readlineSync.question('Your answer: ').toLowerCase()

    const correctAnswer = isEven(number) ? 'yes' : 'no'

    if (input !== 'yes' && input !== 'no') {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    if (input === correctAnswer) {
      console.log('Correct!')
      correctCount += 1
    }
    else {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }
  }

  console.log(`Congratulations, ${userName}!`)
}

export { playEvenGame }
