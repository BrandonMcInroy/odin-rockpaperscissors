const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScorDisplay = document.getElementById("computerScoreDisplay");
const gameResult = document.getElementById("gameResult");
let isGameRunning = true;
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  if (!isGameRunning) {
    resultDisplay.textContent =
      "The game is over.  Please click the Reset button to start a new game.";
    return;
  }
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
  playerDisplay.textContent = ` ${playerChoice
    .charAt(0)
    .toUpperCase()}${playerChoice.slice(1)}`;
  computerDisplay.textContent = ` ${computerChoice
    .charAt(0)
    .toUpperCase()}${computerChoice.slice(1)}`;
  resultDisplay.textContent = result;
  gameScore(result);
}
document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    if (!isGameRunning) {
      return (resultDisplay.textContent =
        "The game is over.  Please click the reset button.");
    }
    playRound(button.id);
  });
});

function gameScore(result) {
  if (result.includes("Win")) {
    playerScore++;
    playerScoreDisplay.textContent = ` ${playerScore}`;
  } else if (result.includes("tie")) {
    playerScoreDisplay.textContent = ` ${playerScore}`;
    computerScorDisplay.textContent = ` ${computerScore}`;
  } else {
    computerScore++;
    computerScorDisplay.textContent = ` ${computerScore}`;
  }

  if (playerScore === 5) {
    gameResult.textContent = `You won the game`;
    isGameRunning = false;
  }
  if (computerScore === 5) {
    gameResult.textContent = `You lost the game!`;
    isGameRunning = false;
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerDisplay.textContent = "";
  computerDisplay.textContent = "";
  playerScoreDisplay.textContent = ` ${playerScore}`;
  computerScorDisplay.textContent = ` ${computerScore}`;
  resultDisplay.textContent = "";
  gameResult.textContent = "";
  isGameRunning = true;
}
document.getElementById("resetButton").addEventListener("click", () => {
  resetGame();
});
