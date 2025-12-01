const sounds = [
  "audio1.mp3",
  "audio2.mp3",
  "audio3.mp3",
  "audio4.mp3",
  "audio5.mp3",
  "audio6.mp3"
];

const buttonsContainer = document.getElementById("buttons");
let currentAudio = null;

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.className = "btn";
  btn.innerText = sound.replace(".mp3", "");

  btn.addEventListener("click", () => {
    if (currentAudio) currentAudio.pause();
    currentAudio = new Audio(`sounds/${sound}`);
    currentAudio.play().catch(() => {});
  });
  buttonsContainer.appendChild(btn);
});

const stopBtn = document.createElement("button");
stopBtn.className = "stop";
stopBtn.innerText = "STOP";
stopBtn.addEventListener("click", () => {
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
  }
});

buttonsContainer.appendChild(stopBtn);
