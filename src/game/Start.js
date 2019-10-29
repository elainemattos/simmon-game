import { changeCounter } from './Counter'
import { activatePads } from './Pad'

export default (status, startGame) => {
  const Start = document.createElement('button')

  Start.classList.add('start')
  Start.innerText = 'Start'
  Start.addEventListener('click', (event) => {
    changeCounter(status.level)
    activatePads()
    startGame()
  })
 
  return Start
}