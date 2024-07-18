console.log("Hello Awesome World!")



// On refreshing the page, the program:

// 1) Generates its own choice


function getComputerChoice() {
    // Input: No parameters
    // Output: A string, one of the following: "rock", "paper", "scissors"

    const randomNum = Math.random();
    // Between 0 and 0.333 is "rock", .3333 .666 is paper, >.66 scissors
    if (randomNum < 0.333) {
        return "rock";
    } else if (randomNum < 0.666) {
        return "paper";
    } else {
        return "scissors";
    }
}


// 2) You will input your choice of rock paper or scissors

function getHumanChoice() {

    // To start, user enters a string exactly
    let humanChoice = prompt("Rock, Paper, Scissors, Shoot?", "");
    // User is allowed to make capitalization errors but not spelling errors
    let lowerCaseAnswer = humanChoice.toLowerCase();

    if (lowerCaseAnswer === "rock" ||
        lowerCaseAnswer === "paper" ||
        lowerCaseAnswer === "scissors"
    ) {
        return lowerCaseAnswer;
    } else {
        console.log("Please type in one of the following only: \"rock\", \"paper\", or \"scissors\"!")
        return getHumanChoice();
    }
    // Later! User chooses from one of three options

}

// 3) The choices are compared and a winner is determined
function playRound(humanChoice) {
    computerChoice = getComputerChoice();
    let info = `The computer chose ${computerChoice} and you chose ${humanChoice}!)`;
    let result = determineRPSWinner(computerChoice, humanChoice);
    
    if (result == 1) {
        computerScore += 1;
        info += ("/n Sorry, you lose this round!");
    } else if (result == 2) {
        humanScore += 1;
        info += (" /n You win this round!");
    } else {
        info += (" /n Tie, neither player wins this round!");
    }
    
    // Update the appropriate text boxes
    let resultBox = document.querySelector('#results');
    let score = document.querySelector('#score');

    resultBox.textContent = info;
    score.textContent = `Score is Computer: ${computerScore} and You: ${humanScore}`;
}

function determineRPSWinner(player1Choice, player2Choice) {
    // Returns 1 if player 1 wins, 2 if player 2 wins, and 0 for a tie
    // Assumes inputs are only "rock", "paper", or "scissors" in lower case
    if (player1Choice == player2Choice) {
        return 0;
    } else if (
        (player1Choice == "rock" && player2Choice == "scissors") ||
        (player1Choice == "scissors" && player2Choice == "paper") ||
        (player1Choice == "paper" && player2Choice == "rock")) {

        return 1;

    } else {
        return 2;
    }

}

function playGame() {
    let computerChoice;
    let humanChoice;
    


    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else {
        console.log("Sorry! You lost the game. Better luck next time.");
    }

}



// Main Code
let computerScore = 0;
let humanScore = 0;
let roundNumber = 0;
const bestOf = 5;
const needToWin = Math.ceil(bestOf/2);
//playGame();

let selections = document.querySelector('#buttonContainer');

selections.addEventListener('click',(e)=>{
    let target = e.target;
    roundNumber += 1;
    console.log(`Playing Round ${roundNumber}`);
    playRound(target.id);
    if( (computerScore == needToWin) || (humanScore == needToWin) ){
        alert("Game Over!");
    }
    
})




// 4) The scores of each play are updated and displayed
// 5) The user can play another round and start it again
// 6) (optional) a button can be used to reset everything




//console.log("computer", computerScore)
//console.log("Human", humanScore)

