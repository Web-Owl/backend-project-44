#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { generateQuestion } from '../src/games/evenGame.js'
import { validateAnswerEvenGame } from '../src/utils/validateAnswer.js'

const description = 'Answer "yes" if the number is even, otherwise answer "no".'

runGame(description, generateQuestion, validateAnswerEvenGame)
