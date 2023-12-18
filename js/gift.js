function reproducirAudio() {
    let audio = document.getElementById("audio");
    audio.play();
}

function solicitarPermiso() {
    if (confirm("¿Quieres reproducir el audio?")) {
        reproducirAudio();
    }
}

// Muestra la solicitud de permiso al cargar la página
window.onload = function() {
    solicitarPermiso();
};