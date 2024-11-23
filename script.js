//your JS code here. If required.

const playingSounds = [];

const soundButtons = document.querySelectorAll('.btn');

soundButtons.forEach(button => {
  button.addEventListener('click', () => {
    const soundFile = button.dataset.sound + '.mp3';
    const audio = new Audio(soundFile);

    audio.play();
    playingSounds.push(audio);

    audio.addEventListener('ended', () => {
      const index = playingSounds.indexOf(audio);
      if (index > -1) {
        playingSounds.splice(index, 1);
      }
    });
  });
});

document.querySelector('.stop').addEventListener('click', () => {
  playingSounds.forEach(audio => {
    audio.pause();
    audio.currentTime = 0;  
  });
  playingSounds.length = 0; 
});

