function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return "The computer chose" + " " + choice + ".";
}
console.log(getComputerChoice());

function getHumanChoice() {
  const humanChoice = prompt("Please choose Rock, Paper or Scissors");
  return "You chose" + " " + humanChoice + ".";
}

console.log(getHumanChoice());
