// returns computer choice from 'rock', 'paper' or 'scissors'
function getComputerChoice() {
    // generate random number among 0,1 and 2 all inclusive
    random_comp_choice = Math.floor(Math.random() * 3);

    if (random_comp_choice === 0) {
        return "rock";
    } else if (random_comp_choice === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// get the human or user choice
function getHumanChoice() {
    human_choice = prompt(
        "Enter your choice: 'rock', 'paper' or 'scissors'",
    ).toLowerCase();
    return human_choice;
}





function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    // logic which decide the win or lose of the game
    function playRound(humanChoice, computerChoice) {
        // all the conditions in which user or human will win
        if (
            (humanChoice === "rock" && computerChoice === "scissors") ||
            (humanChoice === "paper" && computerChoice === "rock") ||
            (humanChoice === "scissors" && computerChoice === "paper")
        ) {
            console.log(`You win! ${humanChoice} beat ${computerChoice}`);
            humanScore += 1;
        }
        // all the conditions in which computer will win
        else if (
            (humanChoice === "rock" && computerChoice === "paper") ||
            (humanChoice === "paper" && computerChoice === "scissors") ||
            (humanChoice === "scissors" && computerChoice === "rock")
        ) {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore += 1;
        } else {
            console.log("Draw! Nobody wins");
        }
    }

    console.log("Round 1!")
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}
Computer Score: ${computerScore}`);

    console.log("Round 2!")
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}
Computer Score: ${computerScore}`);

    console.log("Round 3!")
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}
Computer Score: ${computerScore}`);

    console.log("Round 4!")
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}
Computer Score: ${computerScore}`);

    console.log("Round 5!")
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log(`Human Score: ${humanScore}
Computer Score: ${computerScore}`);
}

playGame()