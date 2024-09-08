const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScorDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  let result = "";

  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (playerChoice === "rock" && computerChoice === "scissors") {
    return "You Win!  Rock crushes Scissors!";
  } else if (playerChoice === "scissors" && computerChoice === "paper") {
    return "You Win!  Scissors cut through Paper!";
  } else if (playerChoice === "paper" && computerChoice === "rock") {
    return "You Win!  Paper covers Rock!";
  } else if (playerChoice === "scissors" && computerChoice === "rock") {
    return "You Lost! Scissors gets crushed by Rock!";
  } else if (playerChoice === "paper" && computerChoice === "scissors") {
    return "You Lost!  Paper gets cut by Scissors!";
  } else if (playerChoice === "rock" && computerChoice === "paper") {
    return "You Lost!  Rock gets covered by Paper!";
  } else {
    return "You lost because you entered an incorrect value.";
  }
}
playersole.log(playRound());

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
// }

// playGame();

// console.log(playGame());
