const audioElement = document.getElementById("audio-element");
const toggleButton = document.getElementById("toggle-button");
const playIcon = document.querySelector(".play-icon");
const pauseIcon = document.querySelector(".pause-icon");

toggleButton.addEventListener("click", () => {
  if (audioElement.paused) {
    playIcon.style.display = "none";
    pauseIcon.style.display = "inline-block";
    audioElement.play();
  } else {
    playIcon.style.display = "inline-block";
    pauseIcon.style.display = "none";
    audioElement.pause();
  }
});