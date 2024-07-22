let computerScore = 0;
let humanScore = 0;

function getComputerChoice(){
    let compChoice = Math.floor(Math.random() * 3);

    if (compChoice == 0) {
        return "rock";
    } else if (compChoice == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let humnChoice = prompt("Enter either \'Rock\', \'Paper\', or \'Scissors\': ");
    return humnChoice;
}

function playRound(humanChoice, computerChoice){
    let humanChoiceLower = humanChoice.toLowerCase();
    if (humanChoiceLower == "rock" && computerChoice == "paper"){
        computerScore ++;
        return "You lose! Paper beats rock";
    } else if (humanChoiceLower == "rock" && computerChoice == "scissors") {
        humanScore ++;
        return "You win! Rock beats scissors";
    } else if (humanChoiceLower == "scissors" && computerChoice == "rock") {
        computerScore ++;
        return "You lose! Rock beats scissors";
    } else if (humanChoiceLower == "scissors" && computerChoice == "paper") {
        humanScore ++;
        return "You win! Scissors beats paper";
    } else if (humanChoiceLower == "paper" && computerChoice == "rock") {
        humanScore ++;
        return "You win! Paper beats rock";
    } else if (humanChoiceLower == "paper" && computerChoice == "scissors") {
        computerScore ++;
        return "You lose! Scissors beats rock";
    } else if (humanChoiceLower == computerChoice) {
        return "Its a tie! You both selected the same option";
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);