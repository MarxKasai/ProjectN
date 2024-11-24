//Declarar lista de tarjetas
const list = [
  {
    title: "❤️17 de enero ❤️",
    id: "17enero",
  },
  {
    title: "❤️19 de febrero ❤️",
    id: "19febreroCasa",
  },
  {
    title: "❤️19 de febrero ❤️",
    id: "19febreroPeluches",
  },
  {
    title: "❤️19 de febrero ❤️",
    id: "19febreroFoto",
  },
  {
    title: "❤️27 de marzo ❤️",
    id: "27marzo",
  },
  {
    title: "❤️5 de abril ❤️",
    id: "5abril",
  },
  {
    title: "❤️7 de abril ❤️",
    id: "7abril",
  },
  {
    title: "❤️mayo ❤️",
    id: "mayo",
  },
  {
    title: "❤️28 de junio ❤️",
    id: "28junio",
  },
  {
    title: "❤️18 de julio ❤️",
    id: "18julioPaseo",
  },
  {
    title: "❤️18 de julio ❤️",
    id: "18julioPuente",
  },
  {
    title: "❤️agosto ❤️",
    id: "2septConcierto",
  },
  {
    title: "❤️agosto ❤️",
    id: "2septPlaya",
  },
  {
    title: "❤️agosto ❤️",
    id: "2septBus",
  },
  {
    title: "❤️1 de septiembre ❤️",
    id: "1sept",
  },
  {
    title: "❤️2 de septiembre ❤️",
    id: "2sept",
  },
];

// JavaScript to add the 'visible' class after the page loads
window.onload = function () {
  document.body.classList.add("visible");
};

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

//Tarjetas comportamiento
let e = 864e5,
  t = 25569,
  a = 324e5;
function i(i) {
  return (i - t) * e - a;
}
window.onload = () => {
  const e = document.querySelector("#masonry"),
    t = 1e4;
  function a() {
    0 == e.classList.contains("active") &&
      (e.classList.add("active"),
      setTimeout(() => {
        e.classList.remove("active"), e.offsetWidth;
      }, t));
  }
  document.addEventListener("scroll", function () {
    a();
  }),
    window.addEventListener("resize", a),
    (function () {
      const t = list;

      t.forEach((t) => {
        let a = "";
        let n = document.createElement("li");
        t.id
          ? t.title &&
            (a =
              "<a href='img/memories/" +
              t.id +
              ".jpg' target='_blank'><img src='img/memories/" +
              t.id +
              ".jpg' /></a><h2><a>" +
              t.title +
              "</a></h2>")
          : ((a = t.title), n.classList.add("spanning")),
          (n.innerHTML = "<div>" + a + "</div>"),
          e.appendChild(n);
      });
    })(),
    a();
};
