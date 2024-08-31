function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return "The computer chose" + " " + choice + ".";
}
console.log(getComputerChoice());

function getHumanChoice() {
  const humanChoice = prompt("Please choose Rock, Paper or Scissors");

  if (humanChoice === "rock") {
    alert("You chose Rock");
  } else if (humanChoice === "paper") {
    alert("You chose Paper");
  } else if (humanChoice === "scissors") {
    alert("You chose Scissors");
  } else if (humanChoice === null || humanChoice === " ") {
    prompt("You must chose Rock, Paper or Scissors");
  } else {
    prompt(
      "That is an invalid choice, please chose only Rock, Paper or Scissors"
    );
  }
  return "You chose" + " " + humanChoice + ".";
}

console.log(getHumanChoice());
