export const validateAnswerEvenGame = (userAnswer, correctAnswer) => {
  const answer = userAnswer.toLowerCase().trim()
  const yesPattern = /^(y|yes)$/
  const noPattern = /^(n|no)$/

  if (!yesPattern.test(answer) && !noPattern.test(answer)) {
    return false
  }
  return answer === correctAnswer
}

export const validateAnswerCalcGame = (userAnswer, correctAnswer) => {
  const numberAnswer = Number(userAnswer.trim())
  if (Number.isNaN(numberAnswer)) {
    return false
  }
  return numberAnswer === correctAnswer
}

export const validateAnswerGDCGame = (userAnswer, correctAnswer) => {
  const numberAnswer = Number(userAnswer.trim())
  if (Number.isNaN(numberAnswer)) {
    return false
  }
  return numberAnswer === correctAnswer
}
