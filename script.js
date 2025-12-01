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

sounds.forEach((file) => {
const name = file.replace(/\.mp3$/i, '');
const btn = document.createElement('button');
btn.className = 'btn';
btn.type = 'button';
btn.textContent = name;

btn.addEventListener('click', () => {
	
if (currentAudio) {
currentAudio.pause();
currentAudio.currentTime = 0;
}

currentAudio = new Audio(`sounds/${file}`);
currentAudio.play().catch((err) => {
console.warn('Audio play failed:', err && err.message);
});
});

buttonsContainer.appendChild(btn);
});

const stopBtn = document.createElement('button');
stopBtn.className = 'stop';
stopBtn.type = 'button';
stopBtn.textContent = 'stop';
stopBtn.addEventListener('click', () => {
if (currentAudio) {
currentAudio.pause();
currentAudio.currentTime = 0;
}
});

buttonsContainer.appendChild(stopBtn);
