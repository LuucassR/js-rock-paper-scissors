// Declare the three posibilities
let posibilities = 3;

// Create the function for computer choice
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * posibilities);
    if (computerChoice == 0){
        return "rock";
    } else if (computerChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }

}

// Create a function for human choice and converto to lowercase
function getHumanChoice() {
    let humanChoice = prompt("Selecte between rock, paper and scissors: ").toLowerCase();
    return humanChoice;
}

// Declare initial scores
let humanScore = 0;
let computerScore = 0;

// Function for one game
function playRound(humanChoice, computerChoice){
    if (humanChoice == computerChoice){
        return console.log("There's a tie");
    } else if (humanChoice == "rock" && computerChoice == "paper"){
        computerScore++;
        return console.log("You lose! Paper beats Rock");
    } else if (humanChoice == "rock" && computerChoice == "scissors") {
        humanScore++;
        return console.log("You win! Paper beats Rock");
    } else if (humanChoice == "paper" && computerChoice == "rock") {
        humanScore++;
        return console.log("You win! Paper beats Rock");
    } else if (humanChoice == "paper" && computerChoice == "scissors"){
        computerScore++;
        return console.log("You lose! Paper beats Rock");
    } else if (humanChoice == "scissors" && computerChoice == "rock"){
        computerScore++;
        return console.log("You lose! Paper beats Rock");
    } else {
        humanScore++;
        return console.log("You win! Paper beats Rock");
    }
}

// Function to play the game 5 times
function playGame(){
    let humanSelection1 = getHumanChoice();
    let computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);
    console.log(`Your score is: ${humanScore}`)
    console.log(`The computer score is: ${computerScore}`)
    console.log("\n")

    let humanSelection2 = getHumanChoice();
    let computerSelection2 = getComputerChoice();
    playRound(humanSelection2, computerSelection2);
    console.log(`Your score is: ${humanScore}`)
    console.log(`The computer score is: ${computerScore}`)
    console.log("\n")

    let humanSelection3 = getHumanChoice();
    let computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);
    console.log(`Your score is: ${humanScore}`)
    console.log(`The computer score is: ${computerScore}`)
    console.log("\n")

    let humanSelection4 = getHumanChoice();
    let computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);
    console.log(`Your score is: ${humanScore}`)
    console.log(`The computer score is: ${computerScore}`)
    console.log("\n")

    let humanSelection5 = getHumanChoice();
    let computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);
    console.log(`Your score is: ${humanScore}`)
    console.log(`The computer score is: ${computerScore}`)
    console.log("\n")
    

    // Check who win
    if (humanScore > computerScore) {
        console.log("Congratulations, You win against the computer");
    } else if (humanScore < computerScore) {
        console.log("Ou, what a shame, a computer win against you :c");
    } else {
        console.log("It's a tie");
    }
}

// Start the game
playGame()