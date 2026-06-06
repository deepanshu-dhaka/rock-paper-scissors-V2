

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
        let str = `You win! ${humanChoice} beat ${computerChoice}`;
        printResult(str);
        printHumanScore(humanScore);
        printComputerScore(computerScore);
    }
    // all the conditions in which computer will win
    else if (
        (humanChoice === "rock" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "rock")
    ) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
        computerScore += 1;
        let str = `You lose! ${computerChoice} beats ${humanChoice}`;
        printResult(str);
        printHumanScore(humanScore);
        printComputerScore(computerScore);
    } else {
        console.log("Draw! Nobody wins");
        let str = "Draw! Nobody wins";
        printResult(str);
        printHumanScore(humanScore);
        printComputerScore(computerScore);
    }

    if (humanScore === 5) {
        printResult("You're the overall winner!")
    }
    if (computerScore === 5) {
        printResult("You lost! Computer won the overall game!")
    }
}


function playGame(event) {

    if (humanScore === 5 || computerScore === 5) {
        return;
    };
    let humanChoice = getHumanChoice(event);
    let computerChoice = getComputerChoice();
    console.log("Human Choice:", humanChoice)
    console.log("Computer Choice:", computerChoice)


    playRound(humanChoice, computerChoice);

    console.log(humanScore, computerScore);
    printResult();

}

function printResult(str) {
    if (str) document.getElementById("result-display-paragraph").innerText = str;
}

function printHumanScore(num) {
    document.getElementById("human-score-display-paragraph").innerText = num;
}

function printComputerScore(num) {
    document.getElementById("computer-score-display-paragraph").innerText = num;
}

function getHumanChoice(event) {
    if (event.target.className === "rock-image") return "rock";
    else if (event.target.className === "paper-image") return "paper";
    else if (event.target.className === "scissors-image") return "scissors";
}


let clickedImages = document.querySelectorAll("img");
clickedImages.forEach(function (image) {
    image.addEventListener("click", playGame)
})



