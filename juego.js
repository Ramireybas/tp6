let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

const input = document.getElementById("guessInput");
const message = document.getElementById("message");
const attemptsText = document.getElementById("attempts");
const btnGuess = document.getElementById("btnGuess");
const btnReset = document.getElementById("btnReset");

btnGuess.addEventListener("click", checkGuess);
btnReset.addEventListener("click", resetGame);

function checkGuess() {
  const userGuess = Number(input.value);

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = "⚠️ Ingresa un número válido entre 1 y 100";
    return;
  }

  attempts++;

  if (userGuess === secretNumber) {
    message.textContent = `🎉 ¡Correcto! El número era ${secretNumber}.`;
  } else if (userGuess < secretNumber) {
    message.textContent = "📉 Demasiado bajo";
  } else {
    message.textContent = "📈 Demasiado alto";
  }

  attemptsText.textContent = `Intentos: ${attempts}`;
  input.value = "";
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  message.textContent = "";
  attemptsText.textContent = "";
  input.value = "";
}
