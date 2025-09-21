#!/usr/bin/env node
import { runGame } from '../src/index.js'
import { generateQuestion } from '../src/games/isPrimeGame.js'
import { validateAnswerStringGame } from '../src/utils/validateAnswer.js'

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".'

runGame(description, generateQuestion, validateAnswerStringGame)
