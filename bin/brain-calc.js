#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { generateQuestion } from '../src/games/calcGame.js'
import { validateAnswerNumberGame } from '../src/utils/validateAnswer.js'

const description = 'What is the result of the expression?'

runGame(description, generateQuestion, validateAnswerNumberGame)
