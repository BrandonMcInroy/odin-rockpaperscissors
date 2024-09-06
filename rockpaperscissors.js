const rock = document.getElementById("rock");
rock.addEventListener("click", () => playRound(rock));

const paper = document.querySelector("#paper");
paper.addEventListener("click", () => playRound(paper));

const scissors = document.querySelector("#scissors");
scissors.addEventListener("click", () => playRound(scissors));

// function getHumanChoice() {
//   return humanChoice.toLowerCase();
// }
// console.log(getHumanChoice());

function getComputerChoice() {
  const computerChoices = ["Rock", "Paper", "Scissors"];
  const computerChoice =
    computerChoices[Math.floor(Math.random() * computerChoices.length)];
  return computerChoice.toLowerCase();
}
// console.log(getComputerChoice());

function playRound() {
  if (rock || paper || scissors === computerChoice) {
    return "It's a tie!";
  } else if (humanChoice === "rockbtn" && computerChoice === "scissors") {
    return "You Win!  Rock crushes Scissors!";
  } else if (humanChoice === "scissorsbtn" && computerChoice === "paper") {
    return "You Win!  Scissors cut through Paper!";
  } else if (humanChoice === "paperbtn" && computerChoice === "rock") {
    return "You Win!  Paper covers Rock!";
  } else if (humanChoice === "scissorsbtn" && computerChoice === "rock") {
    return "You Lost! Scissors gets crushed by Rock!";
  } else if (humanChoice === "paperbtn" && computerChoice === "scissors") {
    return "You Lost!  Paper gets cut by Scissors!";
  } else if (humanChoice === "rockbtn" && computerChoice === "paper") {
    return "You Lost!  Rock gets covered by Paper!";
  } else {
    return "You lost because you entered an incorrect value.";
  }
}

console.log(playRound());

// const humanSelection = getHumanChoice();
// const computerSelection = getComputerChoice();

// console.log(playRound(humanSelection, computerSelection));

// function playGame() {
//   let humanScore = 0;
//   let computerScore = 0;
// }

// playGame();
