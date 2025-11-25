const rollBtn = document.getElementById("rollBtn");
const resultText = document.getElementById("result");
const dice1 = document.getElementById("dice1");
const dice2 = document.getElementById("dice2");


rollBtn.addEventListener("click", () => {
  const random1 = Math.floor(Math.random() * 6) + 1;
  const random2 = Math.floor(Math.random() * 6) + 1;

  dice1.src = `images/dice${random1}.png`;
  dice2.src = `images/dice${random2}.png`;

  if (random1 > random2) {
    resultText.textContent = " 🏆 Player 1 Wins!";
  } else if (random2 > random1) {
    resultText.textContent = "🏆 Player 2 Wins!";
  } else {
    resultText.textContent = " ⛳ It's a Draw!";
  }
});
