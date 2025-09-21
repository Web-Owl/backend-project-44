#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { generateQuestion } from '../src/games/gcdGame.js'
import { validateAnswerGDCGame } from '../src/utils/validateAnswer.js'

const description = 'Find the greatest common divisor of given numbers.'

runGame(description, generateQuestion, validateAnswerGDCGame)
