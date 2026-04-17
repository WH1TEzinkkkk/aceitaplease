const messages = [
    "Tem certeza?",
    "Tem certeza mesmo??",
    "Você tem certeza absoluta?",
    "Por favorzinhooo...",
    "Pensa bem nisso!",
    "Se você disser não, eu vou ficar muito triste",
    "Eu vou ficar muito triste",
    "Eu vou ficar muito, muito, muito triste",
    "Tá bom, eu vou parar de perguntar...",
    "Brincadeira, diz que sim vaii! ❤️"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}