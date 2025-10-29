// Declare the three posibilities
let posibilities = 3;

// Create the function for computer choice
function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * posibilities);
  if (computerChoice == 0) {
    return "rock";
  } else if (computerChoice == 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

// Declare initial scores
let humanScore = 0;
let computerScore = 0;

// Function for one game
function playRound(humanChoice, computerChoice) {
  humanPoints.textContent = `Your Score is: ${humanScore}`;
  computerPoints.textContent = `The computer Score is: ${computerScore}`;
  if (humanScore == 5) {
    return (div.textContent = "Congrats! You win against the computer");
  } else if (computerChoice == 5) {
    return (div.textContent = "What a shame.. You lose against the computer");
  } else if (humanChoice == computerChoice) {
    return (div.textContent = "There's is a tie!");
  } else if (humanChoice == "rock" && computerChoice == "paper") {
    computerScore++;
    return (div.textContent = "You lose! Paper beats Rock");
  } else if (humanChoice == "rock" && computerChoice == "scissors") {
    humanScore++;
    return (div.textContent = "You win! Paper beats Rock");
  } else if (humanChoice == "paper" && computerChoice == "rock") {
    humanScore++;
    return (div.textContent = "You win! Paper beats Rock");
  } else if (humanChoice == "paper" && computerChoice == "scissors") {
    computerScore++;
    return (div.textContent = "You lose! Paper beats Rock");
  } else if (humanChoice == "scissors" && computerChoice == "rock") {
    computerScore++;
    return (div.textContent = "You lose! Paper beats Rock");
  } else {
    humanScore++;
    return (div.textContent = "You win! Paper beats Rock");
  }
}

const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");
const div = document.querySelector(".result");
const humanPoints = document.querySelector(".humanPoints");
const computerPoints = document.querySelector(".computerPoints");

// Añade los listeners correctamente
rockBtn.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

paperBtn.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

scissorsBtn.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});
