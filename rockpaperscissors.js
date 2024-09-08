const choices = ["rock", "paper", "scissors"];
const playerChoice = document.getElementById("rock", "paper", "scissors");

const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScorDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

document
  .getElementById("rock", "paper", "scissors")
  .addEventListener("click", function playRound(playerChoice) {
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
  });

playerDisplay.textContent = `Player: ${playerChoice}`;
computerDisplay.textContent = `Computer: ${computerChoice}`;
resultDisplay.textContent = result;
