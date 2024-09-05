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
    return "You Win!  Rock crushes Scissors!";
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    return "You Win!  Scissors cut through Paper!";
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    return "You Win!  Paper covers Rock!";
  } else if (humanChoice === "scissor" && computerChoice === "rock") {
    return "You Lost! Scissors gets crushed by Rock!";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    return "You Lost!  Paper gets cut by Scissors!";
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    return "You Lost!  Rock gets covered by Paper!";
  } else {
    return "You lost because you entered an incorrect value.";
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
}

playGame();
