export const changeCounter = value => {
  const counter = document.querySelector('.counter')

  counter.innerText = value
}

export default () => {
  const Counter = document.createElement('div')

  Counter.classList.add('counter')
  Counter.innerText = '--'
  
  return Counter
}