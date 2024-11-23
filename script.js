//your JS code here. If required.

const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

const sounds = {
  sound1: new Audio("/sounds/sound1.mp3"),
  sound2: new Audio("/sounds/sound2.mp3"),
  sound3: new Audio("/sounds/sound3.mp3"),
  sound4: new Audio("/sounds/sound4.mp3"),
  sound5: new Audio("/sounds/sound5.mp3"),
  sound6: new Audio("/sounds/sound6.mp3")
};

let activeSound = null;

function playSound(e) {
  const soundName = e.target.getAttribute('data-sound');

  if (activeSound) {
    activeSound.pause();
  }

  activeSound = sounds[soundName];
  activeSound.currentTime = 0;
  activeSound.play();
}

buttons.forEach(button => {
  button.addEventListener('click', playSound);
});

stopButton.addEventListener('click', () => {
  if (activeSound) {
    activeSound.pause();
  }
});
