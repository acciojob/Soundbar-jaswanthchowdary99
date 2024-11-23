//your JS code here. If required.

let sounds = [];

function playSound(e) {
  const soundName = e.target.getAttribute('data-sound');
  const audio = new Audio(`sounds/${soundName}.mp3`);
  audio.play();
  sounds.push(audio);
}

const stopButton = document.querySelector('.stop');

stopButton.addEventListener('click', () => {
  sounds.forEach((sound) => {
    sound.pause();
  });
  sounds = [];
});