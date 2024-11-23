//your JS code here. If required.

const buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');

const sounds = {
  sound1: new Audio("https://www.soundjay.com/button/beep-07.wav"),
  sound2: new Audio("https://www.soundjay.com/button/beep-10.wav"),
  sound3: new Audio("https://www.soundjay.com/button/beep-03.wav"),
  sound4: new Audio("https://www.soundjay.com/button/beep-05.wav"),
  sound5: new Audio("https://www.soundjay.com/button/beep-09.wav"),
  sound6: new Audio("https://www.soundjay.com/button/beep-08.wav")
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
