const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScorDisplay = document.getElementById("computerScoreDisplay");
const gameResult = document.getElementById("gameResult");
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  // const playerChoice = button.id;
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "It's a tie!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    result = "You Win!  Rock crushes Scissors!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    result = "You Win!  Scissors cut through Paper!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    result = "You Win!  Paper covers Rock!";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    result = "You Lost! Scissors gets crushed by Rock!";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    result = "You Lost!  Paper gets cut by Scissors!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    result = "You Lost!  Rock gets covered by Paper!";
  } else {
    result = "You lost because you entered an incorrect value.";
  }
  playerDisplay.textContent = `Player choice: ${playerChoice}`;
  computerDisplay.textContent = `Computer choice: ${computerChoice}`;
  resultDisplay.textContent = result;
  gameScore(result);
}
document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    playRound(button.id);
  });
});

function gameScore(result) {
  if (result.includes("Win")) {
    playerScore++;
    playerScoreDisplay.textContent = `Player score: ${playerScore}`;
  } else result.includes("Lost");
  {
    computerScore++;
    computerScorDisplay.textContent = `Computer score: ${computerScore}`;
  }

  if (playerScore === 5) {
    gameResult.textContent = `You win the game!`;
  }
  if (computerScore === 5) {
    gameResult.textContent = `You lost the game!`;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = `Player score: ${playerScore}`;
  computerScorDisplay.textContent = `Computer score: ${computerScore}`;
  resultDisplay.textContent = "";
  gameResult.textContent = "";
}
