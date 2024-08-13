const rock = document.querySelector("#Rock");
const paper = document.querySelector("#Paper");
const scissors = document.querySelector("#Scissors");

let humnChoice = "";

function playGame(){

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

    let computerSelection = getComputerChoice(); 
    
    

        //let humnChoice = prompt("Enter either \'Rock\', \'Paper\', or \'Scissors\': ");

        
        rock.addEventListener("click", () => {
             humnChoice = "Rock";
             //change to call function inside function
             playRound(humnChoice, computerSelection);
        });

        paper.addEventListener("click", () => {
             humnChoice = "Paper";
             playRound(humnChoice, computerSelection);
        });

        scissors.addEventListener("click", () => {
             humnChoice = "Scissors";
             playRound(humnChoice, computerSelection);
        });
    


    function playRound(humanChoice, computerChoice){
        let humanChoiceLower = humanChoice.toLowerCase();
        if (humanChoiceLower == "rock" && computerChoice == "paper"){
            computerScore ++;
            console.log("You lose! Paper beats rock");
        } else if (humanChoiceLower == "rock" && computerChoice == "scissors") {
            humanScore ++;
            console.log("You win! Rock beats scissors");
        } else if (humanChoiceLower == "scissors" && computerChoice == "rock") {
            computerScore ++;
            console.log("You lose! Rock beats scissors");
        } else if (humanChoiceLower == "scissors" && computerChoice == "paper") {
            humanScore ++;
            console.log("You win! Scissors beats paper");
        } else if (humanChoiceLower == "paper" && computerChoice == "rock") {
            humanScore ++;
            console.log("You win! Paper beats rock");
        } else if (humanChoiceLower == "paper" && computerChoice == "scissors") {
            computerScore ++;
            console.log("You lose! Scissors beats paper");
        } else if (humanChoiceLower == computerChoice) {
            console.log("Its a tie! You both selected the same option");
        }
    }

    
     console.log("Player chose: " + humnChoice);
     console.log("Computer chose: " + computerSelection);
    

    console.log("Computer ended with " + computerScore + " points");
    console.log("Human ended with " + humanScore + " points");
    
    if (computerScore > humanScore) {
        console.log("Computer won, sorry :(");
    } else if (humanScore > computerScore) {
        console.log("Human won, congrats :)");
    } else if (humanScore == computerScore) {
        console.log("It was a tie, both human and computer had the same amount of points");
    }


}



playGame();
