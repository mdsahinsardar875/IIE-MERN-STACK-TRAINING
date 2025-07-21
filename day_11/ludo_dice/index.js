function rollDice() {
  const dice = document.getElementById("dice");
  const randomNumber = Math.floor(Math.random() * 6) + 1;
  dice.textContent = randomNumber;
}
