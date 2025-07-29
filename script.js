const choices = ["rock", "paper", "scissors"];
const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const winnerDisplay = document.getElementById("winner");

document.querySelectorAll(".choice").forEach((button) => {
  button.addEventListener("click", () => {
    const userChoice = button.getAttribute("data-choice");
    const computerChoice = getComputerChoice();
    const result = getResult(userChoice, computerChoice);

    userChoiceDisplay.textContent = capitalize(userChoice);
    computerChoiceDisplay.textContent = capitalize(computerChoice);
    winnerDisplay.textContent = result;
  });
});

function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function getResult(user, computer) {
  if (user === computer) return "It's a tie!";
  if (
    (user === "rock" && computer === "scissors") ||
    (user === "scissors" && computer === "paper") ||
    (user === "paper" && computer === "rock")
  ) {
    return "You win!";
  } else {
    return "Computer wins!";
  }
}

function capitalize(word) {
  return word.charAt(0).toUpperCase() + word.slice(1);
}
