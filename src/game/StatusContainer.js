import Start from './Start'
import Counter from './Counter'


export default (status, startGame) => {
  const StatusContainer = document.createElement('div')

  StatusContainer.classList.add('status-container')
  StatusContainer.append(Start(status, startGame))
  StatusContainer.append(Counter())

  return StatusContainer
}
