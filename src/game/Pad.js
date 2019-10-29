export const playPad = padNumber => {
  const padAudio = document.querySelector(`[data-sound="${padNumber}"]`)
  const pad = document.querySelector(`[data-pad="${padNumber}"]`)
  pad.classList.add('pad-active')
  padAudio.play()
  padAudio.onended = () => {
    pad.classList.remove('pad-active')
  }
}

export const activatePads = () => {
  const pads = document.querySelectorAll('.pad')
  pads.forEach(pad => pad.classList.remove('pad-inactive'))

}

export const inactivatePads = () => {
  const pads = document.querySelectorAll('.pad')
  pads.forEach(pad => pad.classList.add('pad-inactive'))

}

export default (padNumber, checkCorrectSequence) => {
  const Pad = document.createElement('button')
  Pad.classList.add('pad', `pad-${padNumber}`, 'pad-inactive')
  Pad.setAttribute('data-pad', padNumber)
  Pad.addEventListener('click', () => {
    playPad(padNumber)
    setTimeout(() => checkCorrectSequence(padNumber), 800)

  })

  return Pad
}