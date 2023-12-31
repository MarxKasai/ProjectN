var textChoices = [
    "¡Hola! Soy un pingüino :D",
    "Marcos no me paga por estar aquí...",
    "011010010110101",
    "Este mensaje ha sido eliminado"
];

// Function to generate random text and update the HTML element
function generateRandomText() {
    // Get a random index from the textChoices array
    var randomIndex = Math.floor(Math.random() * textChoices.length);
    var randomText = textChoices[randomIndex];

    document.getElementById("randomText").innerText = randomText;
}