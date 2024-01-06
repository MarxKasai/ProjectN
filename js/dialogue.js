let textChoices = [
    "¡Enhorabuena! ¡Este es el primer mensaje de la lista! La prob. de aparición era del 2.86%",
    "¡Hola! Soy un pingüino, mi nombre es Noma :D",
    "25-11-2023 <3",
    "Marcos no me paga por estar aquí...",
    "011010010110101010100101",
    "ⓘ Este mensaje ha sido eliminado.",
    "if (u) {♡;}",
    "爱",
    "La canción 'アオハライド' está guardada como HerSong.mp3",
    "¡Adivina cúal es mi color favorito! Es el rojo, sí...",
    "Error 404",
    "Abre la puerta al paraíso~♪ Y mira que hay tras el sol tras el... ¡¿Estabas ahí?!",
    "I'm a Brooklyn baby~♪ Tatarataratara~♪ Tatararararara~♪",
    "Chukuchukuchukuchuku~",
    "Holaaaaa :DD",
    "isdhcbhid",
    "djiicnjiwedi",
    "Bienvenida, Señorita. Estoy a su disposición. Solo no me pida que me quite el esmoquin o que deje de moverme. ^^'",
    "I am Kenough",
    "Hmmmm en plan... Espera, ¿qué iba a decir? o_o'",
    "Damn, those cats got me third-wheeling over here! Good thing they don't understand this language, hehe...",
    "Sonríe :)",
    "(っ˘з(˘⌣˘ )",
    "Legendary!",
    "Quadra Kill!!",
    "P E N T A  K I L L",
    "¡Jope! Puedo escuchar a mi Creador... 'Eimikochu'... ¡Qué enigmáticas y sabias palabras, oh, Creador!",
    "¡Ostia! Puedo escuchar a mi Creador... 'Qué sueño'... ¡Qué sabias y enigmáticas palabras, oh, Creador!",
    "¡Ejem! Esta frase fue escrita el 6-1-2024, como la mayoría de ellas... ?!?!!! Pensé que tendría que decir algo más, qué fácil >:)",
    "Reinicia (↻) la página para ver un nuevo mensaje aleatorio. Ah, ya lo sabías. Es lo que tiene lo de aleatorio... :(",
    "La noche estrellada lo oculta, pero el fondo base donde estaba el regalo volador es del color #aec6cf (azul pastel)",
    "¿Soy un pingüino realmente? ¿Es demostrable mi existencia? Tal vez no elija mis propias palabras. Tal vez solo sean la línea 33 del archivo dialogue.js anexionado a index.html...",

    "⠀⠀⠀⠀⣀⡤⣤⠶⠛⠉⠉⠀⠀⠉⠉⠛⠲⣤⣤⣄⠀⠀⠀⠀⠀\n" +
    "⠀⠀⠀⡼⠃⠈⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠁⠈⢧⠀⠀⠀⠀\n" +
    "⠀⠀⡼⢁⡆⠀⢀⡀⠀⠀⠀⠀⠀⠀⠀⠀⢀⡄⠀⢰⡈⢧⠀⠀⠀\n" +
    "⢀⡞⠁⣸⠁⠀⢠⠬⠓⠀⣀⠀⠀⢀⠀⠛⠥⣄⠀⠀⡇⠈⢳⡀⠀\n" +
    "⡞⠀⠀⠹⣆⠀⠀⠆⠀⠀⠓⠊⠙⠚⠁⠀⠀⠀⠀⣰⠇⠀⠀⢻⠀\n" +
    "⣇⠀⠀⠀⠈⣹⠶⠦⠤⠤⣤⣤⣤⡤⠤⠤⠴⠶⣏⠁⠀⠀⠀⣸⠁\n" +
    "⠈⠓⠲⠖⠚⠁⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠈⠓⠲⠶⠚⠁⠀",

    "¡Hay 35 mensajes posibles contando este! :D",
    "¡Enhorabuena! ¡Este es el último mensaje de la lista! La prob. de aparición era del 2.86%"
];

// Function to generate random text and update the HTML element
function generateRandomText() {
    // Get a random index from the textChoices array
    let randomIndex = Math.floor(Math.random() * textChoices.length);
    let randomText = textChoices[randomIndex];

    document.getElementById("randomText").innerText = randomText;
}