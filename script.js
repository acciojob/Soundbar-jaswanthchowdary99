//your JS code here. If required.

const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

let sounds = [];

function playSound(e) {
  const soundName = e.target.getAttribute('data-sound');

  const audio = document.createElement('audio');

  audio.src = `sounds/${soundName}.mp3`;
  document.body.appendChild(audio);
  audio.play();

  sounds.push(audio);
}

buttons.forEach(button => {
  button.addEventListener('click', playSound);
});

stopButton.addEventListener('click', () => {
  sounds.forEach((sound) => {
    sound.pause();
    document.body.removeChild(sound);
  });
  sounds = [];
})