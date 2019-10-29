export default soundNumber => {
  const Sound = document.createElement('audio')

  Sound.setAttribute('data-sound', soundNumber)
  Sound.innerHTML = `<source src='https://s3.amazonaws.com/freecodecamp/simonSound${soundNumber}.mp3'></source>`

  return Sound
}