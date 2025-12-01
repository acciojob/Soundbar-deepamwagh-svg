const sounds = [
  'applause.mp3',
  'boo.mp3',
  'gasp.mp3',
  'tada.mp3',
  'victory.mp3',
  'wrong.mp3'
];

const buttonsContainer = document.getElementById('buttons');
let currentAudio = null;

// create audio elements that Cypress can detect
const audioMap = {};

sounds.forEach((file) => {
  const audio = document.createElement('audio');
  audio.src = `sounds/${file}`;
  audio.preload = 'auto';
  audio.style.display = 'none'; // keep clean DOM
  document.body.appendChild(audio);
  audioMap[file] = audio;
});

// Create UI buttons
sounds.forEach((file) => {
  const label = file.replace('.mp3', '');

  const btn = document.createElement('button');
  btn.className = 'btn';
  btn.textContent = label;

  btn.addEventListener('click', () => {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
    }

    currentAudio = audioMap[file];
    currentAudio.play().catch(() => {});
  });

  buttonsContainer.appendChild(btn);
});

// STOP button
const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.textContent = 'stop';

stopBtn.addEventListener('click', () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

buttonsContainer.appendChild(stopBtn);
