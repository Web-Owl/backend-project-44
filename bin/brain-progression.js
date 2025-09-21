#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { generateQuestion } from '../src/games/progressionGame.js'
import { validateAnswerNumberGame } from '../src/utils/validateAnswer.js'

const description = 'What number is missing in the progression?'

runGame(description, generateQuestion, validateAnswerNumberGame)
