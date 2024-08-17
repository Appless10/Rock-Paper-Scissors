const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");
const computerOption = document.querySelector(".computerChoice");
const humanOption = document.querySelector(".humanChoice");
const computerScoreAmount = document.querySelector(".computerScore");
const humanScoreAmount = document.querySelector(".humanScore");
const optionPicker = document.querySelector(".optionPicker");
const outcome = document.querySelector(".outcome");

let humnChoice = "";

function playGame(){

    let computerScore = 0;
    let humanScore = 0;

        rock.addEventListener("click", () => {
             humnChoice = "Rock";
             //change to call function inside function
             playRound(humnChoice);
             endGame();
        });

        paper.addEventListener("click", () => {
             humnChoice = "Paper";
             playRound(humnChoice);
             endGame();
        });

        scissors.addEventListener("click", () => {
             humnChoice = "Scissors";
             playRound(humnChoice);
             endGame();
        });
    

    function playRound(humanChoice){

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

        let computerChoice = getComputerChoice();
        let humanChoiceLower = humanChoice.toLowerCase();
        if (humanChoiceLower == "rock" && computerChoice == "paper"){
            computerScore ++;
            computerScoreAmount.textContent = computerScore;
            console.log("Player chose: " + humnChoice);
            console.log("Computer chose: " + computerChoice);
            computerOption.textContent = "paper";
            humanOption.textContent = "rock";
            outcome.textContent = "You lose! Paper beats rock";
            console.log("You lose! Paper beats rock");
        } else if (humanChoiceLower == "rock" && computerChoice == "scissors") {
            humanScore ++;
            humanScoreAmount.textContent = humanScore;
            console.log("Player chose: " + humnChoice);
            console.log("Computer chose: " + computerChoice);
            computerOption.textContent = "scissors";
            humanOption.textContent = "rock";
            outcome.textContent = "You win! Rock beats scissors";
            console.log("You win! Rock beats scissors");
        } else if (humanChoiceLower == "scissors" && computerChoice == "rock") {
            computerScore ++;
            computerScoreAmount.textContent = computerScore;
            console.log("Player chose: " + humnChoice);
            console.log("Computer chose: " + computerChoice);
            computerOption.textContent = "rock";
            humanOption.textContent = "scissors";
            outcome.textContent = "You lose! Rock beats scissors";
            console.log("You lose! Rock beats scissors");
        } else if (humanChoiceLower == "scissors" && computerChoice == "paper") {
            humanScore ++;
            humanScoreAmount.textContent = humanScore;
            console.log("Player chose: " + humnChoice);
            console.log("Computer chose: " + computerChoice);
            computerOption.textContent = "paper";
            humanOption.textContent = "scissors";
            outcome.textContent = "You win! Scissors beats paper";
            console.log("You win! Scissors beats paper");
        } else if (humanChoiceLower == "paper" && computerChoice == "rock") {
            humanScore ++;
            humanScoreAmount.textContent = humanScore;
            console.log("Player chose: " + humnChoice);
            console.log("Computer chose: " + computerChoice);
            computerOption.textContent = "rock";
            humanOption.textContent = "paper";
            outcome.textContent = "You win! Paper beats rock";
            console.log("You win! Paper beats rock");
        } else if (humanChoiceLower == "paper" && computerChoice == "scissors") {
            computerScore ++;
            computerScoreAmount.textContent = computerScore;
            console.log("Player chose: " + humnChoice);
            console.log("Computer chose: " + computerChoice);
            computerOption.textContent = "scissors";
            humanOption.textContent = "paper";
            outcome.textContent = "You lose! Scissors beats paper";
            console.log("You lose! Scissors beats paper");
        } else if (humanChoiceLower == computerChoice) {
            console.log("Player chose: " + humnChoice);
            console.log("Computer chose: " + computerChoice);
            computerOption.textContent = humanChoiceLower;
            humanOption.textContent = computerChoice;
            outcome.textContent = "Its a tie! You both selected the same option";
            console.log("Its a tie! You both selected the same option");
        }
    }

    function endGame(){
    
     console.log("Computer ended with " + computerScore + " points");
     console.log("Human ended with " + humanScore + " points");
    
     if (computerScore == 5 || humanScore == 5) {
     if (computerScore > humanScore) {
         console.log("Computer won, sorry :(");
         humanScore = 0;
         computerScore = 0;
         humanScoreAmount.textContent = humanScore;
         computerScoreAmount.textContent = computerScore;
         optionPicker.textContent = "Computer won, sorry :(";
     } else if (humanScore > computerScore) {
         console.log("Human won, congrats :)");
         humanScore = 0;
         computerScore = 0;
         humanScoreAmount.textContent = humanScore;
         computerScoreAmount.textContent = computerScore;
         optionPicker.textContent = "Human won, congrats :)";
     } else if (humanScore == computerScore) {
         console.log("It was a tie, both human and computer had the same amount of points");
         humanScore = 0;
         computerScore = 0;
         humanScoreAmount.textContent = humanScore;
         computerScoreAmount.textContent = computerScore;
         optionPicker.textContent = "It was a tie, both human and computer had the same amount of points";
     }
     }
    }
}



playGame();
