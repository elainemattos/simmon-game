import Pad, { playPad } from './Pad'
import StatusContainer from './StatusContainer'
import Sound from './Sound'
import { changeCounter } from './Counter'
import { clearInterval } from 'timers'

export default () => {
  const Board = document.createElement('div')
  const status = {
    started: false,
    level: 0,
    sequence: [],
    player: []
  }

  const resetGame = () => {
    status.started = false
    status.level = 0
    status.sequence = []
    status.player = []
  }

  const startGame = () => {
    status.started = true
    newSequenceMove()
    playSequence()
  }
  
  const startRound = () => {
    status.player = []
  }

  const newSequenceNumber = () => Math.floor((Math.random() * 4)) + 1

  const newSequenceMove = () => {
    const number = newSequenceNumber()
    status.sequence.push(number)

  }
  
  const playSequence = () => {
    status.sequence.map(number => 
      setTimeout(() => playPad(number), 1000)
    )
  }

  const compareArrays = (arr1, arr2) => arr1.toString() === arr2.toString()

  const checkCorrectSequence = number => {
    const isTheLastNumberOfSequence = status.level === status.sequence.length -1
   
    if(isTheLastNumberOfSequence) {
      status.player.push(number)
      console.log(`lastnumber`, status)
    
      const isSequenceCorrect = compareArrays(status.player, status.sequence)
      console.log(isSequenceCorrect)
      if (isSequenceCorrect) {
        startRound()
        addLevel()
        checkEndOfGame()
      }
    }
  }

  const checkEndOfGame = () => {
    const lastRound = 10
    if(status.level < lastRound) {
      newSequenceMove()
      playSequence()
    } else {
      alert('você venceu')
    }
  }

  const addLevel = () => {
    status.level++
    changeCounter(status.level)
  }

  const components = [
    Pad(1, checkCorrectSequence), 
    Pad(2, checkCorrectSequence), 
    Pad(3, checkCorrectSequence), 
    Pad(4, checkCorrectSequence), 
    StatusContainer(status, startGame), 
    Sound(1), 
    Sound(2), 
    Sound(3), 
    Sound(4)
  ]

  Board.classList.add('board')
  components.map(component => Board.append(component))

  return Board
} 