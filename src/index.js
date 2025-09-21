import readlineSync from 'readline-sync'

const ROUNDS_COUNT = 3

export const runGame = (description, generateQuestion, validateAnswer) => {
  console.log('Welcome to the Brain Games!')
  const userName = readlineSync.question('May I have your name? ')
  console.log(`Hello, ${userName}!`)
  console.log(description)

  for (let i = 0; i < ROUNDS_COUNT; i++) {
    const { question, correctAnswer } = generateQuestion()
    console.log(`Question: ${question}`)

    const userAnswer = readlineSync.question('Your answer: ').toLowerCase().trim()

    if (!validateAnswer(userAnswer, correctAnswer)) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`)
      console.log(`Let's try again, ${userName}!`)
      return
    }

    console.log('Correct!')
  }

  console.log(`Congratulations, ${userName}!`)
}
