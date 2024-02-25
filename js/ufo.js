// Botones audio
let audio = document.getElementById('audio');
let audioButton = document.getElementById('audioButton');

function toggleAudio() {
    if (audio.paused) {
         audio.play();
    } else {
        audio.pause();
    }
}


// Funcionamiento televisor
const mediaUrls = [
    'mp4/TenkiNoKo.mp4',
    'mp4/HowlFood.mp4',
    'mp4/ChihiroTrain.mp4',
    'mp4/Wotakoi.mp4',
    'mp4/CinnamoCrazy.mp4',
    'mp4/McSuzume.mp4',
    '',
];

let currentIndex = 0;

let preloadedVideos = {};
function preloadVideo(url) {
    if (!preloadedVideos[url]) {
        const video = document.createElement('video');
        video.src = url;
        video.type = 'video/mp4';
        video.preload = 'auto';
        video.style.display = 'none';
        document.body.appendChild(video);
        preloadedVideos[url] = true;
    }
}

function swapMedia() {
    const mediaContainer = document.getElementById('media-container');
    mediaContainer.innerHTML = '';
    const url = mediaUrls[currentIndex];
    const nextUrl = mediaUrls[(currentIndex + 1) % mediaUrls.length];
    const isImg = /\.(jpg|jpeg|png|gif)$/i.test(url);
    for (let i = 0; i < 4; i++) {
        if (isImg) {
            const img = document.createElement('img');
            img.src = url;
            mediaContainer.appendChild(img);
        } else {
            const video = document.createElement('video');
            const source = document.createElement('source');
            source.src = url;
            source.type = 'video/mp4';
            video.autoplay = true;
            video.muted = true;
            video.loop = true;
            ( i > 0 ) ? video.style.opacity = currentOpacity : '';
            video.appendChild(source);
            mediaContainer.appendChild(video);
            preloadVideo(nextUrl);
        }
    }
    currentIndex = (currentIndex + 1) % mediaUrls.length;
}
document.querySelector("#media-container").addEventListener('click', (e)=>{
    e.preventDefault();
    (currentIndex == 7) ? currentIndex++ : '';
    swapMedia();
});


let currentOpacity = 1;
document.querySelector("input#opacity").addEventListener("input", (e) => {
    currentOpacity = e.target.value;
    let bgTarget = document.querySelectorAll("video");
    for (let i = 1; i < bgTarget.length; i++) {
        bgTarget[i].style.opacity = currentOpacity;
    }
});


const d = new Date();
const hr = d.getHours() % 12;
const min = d.getMinutes().toString().padStart(2, '0');
document.querySelector(".display").innerHTML = `${hr}:${min}`;