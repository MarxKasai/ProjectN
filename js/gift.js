window.onload = function() {
    alert('¡Algo está cayendo!\n\nConsejo: pulsa el botón de play cada vez que accedas a una página');
};

let audio = document.getElementById('audio');
        let audioButton = document.getElementById('audioButton');

        function toggleAudio() {
            if (audio.paused) {
                audio.play();
            } else {
                audio.pause();
            }
            updateButton();
        }

        function updateButton() {
            audioButton.innerHTML = audio.paused ? '▶️' : '⏸';
        }

        audio.addEventListener('play', updateButton);
        audio.addEventListener('pause', updateButton);