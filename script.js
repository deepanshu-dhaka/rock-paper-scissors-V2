// returns computer choice from 'rock', 'paper' or 'scissors'
function getComputerChoice(){
    // generate random number among 0,1 and 2 all inclusive
    random_comp_choice = Math.floor(Math.random() * 3)

    if (random_comp_choice === 0){
        return 'rock';
    } else if (random_comp_choice === 1){
        return 'paper';
    } else{
        return 'scissors';
    }
}

// get the human or user choice
function getHumanChoice(){
    human_choice = prompt("Enter your choice: 'rock', 'paper' or 'scissors'").toLowerCase();
    return human_choice;
}

