    function mpl(){
    const audioElement = document.getElementById("audio-element");
          const toggleButton = document.getElementById("toggle-button");
        
          toggleButton.addEventListener("click", () => {
            if (audioElement.paused) {
              toggleButton.textContent = "Playing";
              audioElement.play();
            } else {
              toggleButton.textContent = "Paused";
              audioElement.pause();
            }
          });
        }