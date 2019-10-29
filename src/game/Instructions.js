export default () => {
  const Instructions = document.createElement('div')
  Instructions.innerHTML = `
    <h2 class="instructions-title">Instructions</h2>
    <p class="instructions-text">pipipi popopo papapapapa</p>
  `
  Instructions.classList.add('instructions')
  
  return Instructions
}