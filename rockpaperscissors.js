const humanScore = 0;
const computerScore = 0;

function getHumanChoice() {
  const humanChoice = prompt("Please choose Rock, Paper or Scissors");
  return humanChoice.toLowerCase();
}
// console.log(getHumanChoice());

function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  const computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return computerChoice.toLowerCase();
}
// console.log(getComputerChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    return "You Win!  Rock crushes scissors!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    return "You Win!  Scissors cut through Paper!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return "You Win!  Paper covers Rock";
  } else {
    return "You Lost!";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(playRound(humanSelection, computerSelection));
