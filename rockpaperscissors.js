const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  const computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return "The computer chose" + " " + computerChoice + ".";
}
console.log(getComputerChoice());

function getHumanChoice() {
  const humanChoice = prompt("Please choose Rock, Paper or Scissors");
  return "You chose" + " " + humanChoice + ".";
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);
