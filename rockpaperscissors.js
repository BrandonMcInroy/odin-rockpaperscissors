const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  const computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return "The computer chose" + " " + computerChoice.toLowerCase() + ".";
}
console.log(getComputerChoice());

function getHumanChoice() {
  const humanChoice = prompt("Please choose Rock, Paper or Scissors");
  return "You chose" + " " + humanChoice.toLowerCase() + ".";
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock")
  ) {
    return "You Win!";
  } else {
    return "You Loose!";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
