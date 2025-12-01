//your JS code here. If required.
const sounds = ["sound1.mp3", "sound2.mp3", "sound3.mp3", "sound4.mp3"];
const buttonsContainer = document.getElementById("buttons");
let currentAudio = null;


sounds.forEach(sound => {
const btn = document.createElement("button");
btn.className = "btn";
btn.innerText = sound.replace(".mp3", "");


btn.addEventListener("click", () => {
if (currentAudio) currentAudio.pause();
currentAudio = new Audio(`sounds/${sound}`);
currentAudio.play();
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
