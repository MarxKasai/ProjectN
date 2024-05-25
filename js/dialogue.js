let textChoices = [
    "¡Enhorabuena! ¡Este es el primer mensaje de la lista! La prob. de aparición era del 1.14%",
    "¡Hola! Soy un pingüino, mi nombre es Noma :D",
    "25-11-2023 <3",
    "Marcos no me paga por estar aquí...",
    "011010101110101",
    "ⓘ Este mensaje ha sido eliminado.",
    "if (u) {♡;}",
    "爱",
    "La canción 'アオハライド' está guardada como HerSong.mp3",
    "¡Adivina cúal es mi color favorito! Es el rojo, sí... ¡Ay dio mio! ¡Este chiste ya no funciona!",
    "Error 404",
    "Abre la puerta al paraíso~♪ Y mira que hay tras el sol tras el... ¡¿Estabas ahí?!",
    "I'm a Brooklyn baby~♪ Tatarataratara~♪ Tatararararara~♪",
    "Chkuchkuchku~",
    "Holaaaaa :DD",
    "isdhcbhid",
    "djiicnjiwedi",
    "Bienvenida, Señorita. Estoy a su disposición. Solo no me pida que me quite el esmoquin o que deje de moverme. ^^'",
    "I am Kenough",
    "Hmmmm en plan... Espera, ¿qué iba a decir? o_o'",
    "Damn, those cats got me third-wheeling over here! Good thing they don't understand this language, hehe...",
    "Sonríe :)",
    "(っ˘з(˘⌣˘ )",
    "Legendary!!",
    "Quadra Kill!!!",
    "P E N T A  K I L L",
    "¡Jope! Puedo escuchar a mi Creador... 'Eimikochu'... ¡Qué enigmáticas y sabias palabras, oh, Creador!",
    "¡Ostia! Puedo escuchar a mi Creador... 'Qué sueño'... ¡Qué sabias y enigmáticas palabras, oh, Creador!",
    "¡Ejem! Esta frase fue escrita el 6-1-2024, como la mayoría de ellas... ?!?!!! Pensé que tendría que decir algo más, qué fácil >:)",
    "Reinicia (↻) la página para ver un nuevo mensaje aleatorio. Ah, ya lo sabías. Es lo que tiene lo de aleatorio... :(",
    "La noche estrellada lo oculta, pero el fondo base donde estaba el regalo volador es del color #aec6cf (azul pastel)",
    "¿Soy un pingüino realmente? ¿Es demostrable mi existencia? Tal vez no elija mis propias palabras. Tal vez solo sean la línea 33 del archivo dialogue.js anexionado a index.html...",
    "17-1-2024 <3",
    "21-3-2024 <3",
    "1-5-2024 <3",
    "Triple Kill!",
    "Eres mi chiquitilla preciosa. ¡No lo digo yo eh! Lo dice la ciencia. Quiero decir, él. Es de parte de él.",
    "MWAH",
    "De ave marina a estrellita, en realidad no me explotan aquí. Era bait, me sentía ave liante >:)",
    "Jo... Me llamó rabudito por hablar a espaldas de los gatos en aquel mensaje >:(",
    "¿Sabes que dijo cuando vio el arcoíris en mi nombre? No sea así, que así no se e D:",
    "Puede que los gatos estén con vosotros, pero el pingüino tiene mi nombre jsjsjs",
    "Ui!! :D",
    "¡Ejem! Esta frase fue escrita el 25-5-2024, como la mayoría de ellas... ?!?!!! La mayoría fueron antes, ese día se actualizaron las opciones con 15 nuevas, qué difícil >:(",
    "Yo también quiero risotto... ¡Porfi!",
    "CONFIRMANDO UBICACIÓN... penguin-container > speech-wrapper > bubble > txt > message. MOSTRANDO MENSAJE: CONFIRMANDO UBICACIÓN... penguin-container > speech-wrapper > bubble > txt > message. MOSTRANDO MENSAJE: CONFIRMAND-",
    "¿T? ¿Té? Qué rico de cúrcuma... ¡Ah! Vale, de su parte... TE ADORO",
    

    "⠀⠀⠀⠀⣀⡤⣤⠶⠛⠉⠉⠀⠀⠉⠉⠛⠲⣤⣤⣄⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⡼⠃⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠈⢧⠀⠀⠀⠀\n" +
    "⠀⠀⡼⢁⡆⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⠀⢰⡈⢧⠀⠀⠀\n" +
    "⢀⡞⠁⣸⠁⠀⢠⠬⠓⠀⣀⠀⠀⢀⠀⠛⠥⣄⠀⠀⡇⠈⢳⡀⠀\n" +
    "⡞⠀⠀⠹⣆⠀⠀⠆⠀⠀⠓⠊⠙⠚⠁⠀⠀⠀⠀⣰⠇⠀⠀⢻⠀\n" +
    "⣇⠀⠀⠀⠈⣹⠶⠦⠤⠤⣤⣤⣤⡤⠤⠤⠴⠶⣏⠁⠀⠀⠀⣸⠁\n" +
    "⠈⠓⠲⠖⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠲⠶⠚⠁⠀",

    "¡Hay 50(35+15) mensajes posibles contando este! :D",
    "¡Enhorabuena! ¡Este es el último mensaje de la lista! La prob. de aparición era del 1.14%"
];

function generateRandomText() {
    let randomIndex = Math.floor(Math.random() * textChoices.length);
    let randomText = textChoices[randomIndex];

    document.getElementById("randomText").innerText = randomText;
}