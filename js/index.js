// Boton audio
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


// Obtener fecha actual
let currentDate = new Date();
let formattedDate = currentDate.getDate() + '-' + (currentDate.getMonth() + 1) + '-' + currentDate.getFullYear();
document.getElementById('currentDate').innerText = formattedDate;

//Obtener hora actual
currentDate = new Date();
let formattedTime = currentDate.toLocaleTimeString('en-US', { timeStyle: 'short' });
document.getElementById('currentTime').innerText = formattedTime;

// Efecto letra de colores
(function () {
    var angle = 0;
    var textoArcoiris = document.querySelector('p');
    var text = textoArcoiris.textContent.split('');
    var len = text.length;
    var phaseJump = 360 / len;
    var spans;
  
    textoArcoiris.innerHTML = text.map(function (char) {
      return '<span>' + char + '</span>';
    }).join('');
  
    spans = textoArcoiris.children;
  
    (function wheee () {
      for (var i = 0; i < len; i++) {
        spans[i].style.color = 'hsl(' + (angle + Math.floor(i * phaseJump)) + ', 55%, 70%)';
      }
      angle++;
      requestAnimationFrame(wheee);
    })();
})();  

// Efecto petalos
class Petal {
    constructor(config) {
        this.el = document.createElement('div');
        this.customClass = config.customClass || '';
        this.x = config.x || 0;
        this.y = config.y || 0;
        this.z = config.z || 0;
        this.xSpeedVariation = config.xSpeedVariation || 0;
        this.ySpeed = config.ySpeed || 0;
        this.rotation = {
            axis: 'X',
            value: 0,
            speed: 0,
            x: 0
        };

        if (config.rotation && typeof config.rotation === 'object') {
            this.rotation.axis = config.rotation.axis || this.rotation.axis;
            this.rotation.value = config.rotation.value || this.rotation.value;
            this.rotation.speed = config.rotation.speed || this.rotation.speed;
            this.rotation.x = config.rotation.x || this.rotation.x;
        }

        this.el.className = 'petal  ' + this.customClass;
        this.el.style.position = 'absolute';
        this.el.style.backfaceVisibility = 'visible';
    }
}

class BlossomScene {
    constructor(config) {
        this.container = document.getElementById(config.id);
        if (this.container === null) {
            throw new Error('[id] provided was not found in document');
        }
        this.placeholder = document.createElement('div');
        this.petals = [];
        this.numPetals = config.numPetals || 5;
        this.petalsTypes = config.petalsTypes;
        this.gravity = config.gravity || 0.8;
        this.windMaxSpeed = config.windMaxSpeed || 4;
        this.windMagnitude = 0.2;
        this.windDuration = 0;
        this.width = this.container.offsetWidth;
        this.height = this.container.offsetHeight;
        this.timer = 0;

        this.container.style.overflow = 'hidden';
        this.placeholder.style.transformStyle = 'preserve-3d';
        this.placeholder.style.width = this.container.offsetWidth + 'px';
        this.placeholder.style.height = this.container.offsetHeight + 'px';
        this.container.appendChild(this.placeholder);
        this.createPetals();
        requestAnimationFrame(this.updateFrame.bind(this));
    }

    resetPetal(petal) {
        petal.x = this.width * 2 - Math.random() * this.width * 1.75;
        petal.y = petal.el.offsetHeight * -1;
        petal.z = Math.random() * 200;

        if (petal.x > this.width) {
            petal.x = this.width + petal.el.offsetWidth;
            petal.y = Math.random() * this.height / 2;
        }

        petal.rotation.speed = Math.random() * 10;
        let randomAxis = Math.random();
        if (randomAxis > 0.5) {
            petal.rotation.axis = 'X';
        } else if (randomAxis > 0.25) {
            petal.rotation.axis = 'Y';
            petal.rotation.x = Math.random() * 180 + 90;
        } else {
            petal.rotation.axis = 'Z';
            petal.rotation.x = Math.random() * 360 - 180;
            petal.rotation.speed = Math.random() * 3;
        }

        petal.xSpeedVariation = Math.random() * 0.8 - 0.4;
        petal.ySpeed = Math.random() + this.gravity;

        return petal;
    }

    calculateWindSpeed(t, y) {
        let a = this.windMagnitude / 2 * (this.height - 2 * y / 3) / this.height;
        return a * Math.sin(2 * Math.PI / this.windDuration * t + (3 * Math.PI / 2)) + a;
    }

    updatePetal(petal) {
        let petalWindSpeed = this.calculateWindSpeed(this.timer, petal.y);
        let xSpeed = petalWindSpeed + petal.xSpeedVariation;

        petal.x -= xSpeed;
        petal.y += petal.ySpeed;
        petal.rotation.value += petal.rotation.speed;

        let t = 'translateX( ' + petal.x + 'px ) translateY( ' + petal.y + 'px ) translateZ( ' + petal.z + 'px )  rotate' + petal.rotation.axis + '( ' + petal.rotation.value + 'deg )';
        if (petal.rotation.axis !== 'X') {
            t += ' rotateX(' + petal.rotation.x + 'deg)';
        }
        petal.el.style.transform = t;

        if (petal.x < -10 || petal.y > this.height + 10) {
            this.resetPetal(petal);
        }
    }

    updateWind() {
        this.windMagnitude = Math.random() * this.windMaxSpeed;
        this.windDuration = this.windMagnitude * 50 + (Math.random() * 20 - 10);
    }

    createPetals() {
        for (let i = 0; i < this.numPetals; i++) {
            let tmpPetalType = this.petalsTypes[Math.floor(Math.random() * (this.petalsTypes.length - 1))];
            let tmpPetal = new Petal({ customClass: tmpPetalType.customClass });

            this.resetPetal(tmpPetal);
            this.petals.push(tmpPetal);
            this.placeholder.appendChild(tmpPetal.el);
        }
    }

    updateFrame() {
        if (this.timer === this.windDuration) {
            this.updateWind();
            this.timer = 0;
        }

        let petalsLen = this.petals.length;
        for (let i = 0; i < petalsLen; i++) {
            this.updatePetal(this.petals[i]);
        }

        this.timer++;
        requestAnimationFrame(this.updateFrame.bind(this));
    }
}

const petalsTypes = [
    new Petal({ customClass: 'petal-style1' }),
    new Petal({ customClass: 'petal-style2' }),
    new Petal({ customClass: 'petal-style3' }),
    new Petal({ customClass: 'petal-style4' })
];

const myBlossomSceneConfig = {
    id: 'blossom_container',
    petalsTypes
};

const myBlossomScene = new BlossomScene(myBlossomSceneConfig);