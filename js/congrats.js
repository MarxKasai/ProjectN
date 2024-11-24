// Boton audio
let audio = document.getElementById("audio");
let audioButton = document.getElementById("audioButton");

function toggleAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
  updateButton();
}

function updateButton() {
  audioButton.innerHTML = audio.paused ? "▶️" : "⏸";
}

audio.addEventListener("play", updateButton);
audio.addEventListener("pause", updateButton);
