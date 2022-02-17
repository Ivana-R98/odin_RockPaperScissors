function computerPlay() {
    let choiceNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    switch(true) {
        case choiceNumber === 0:
            computerChoice = 'ROCK';
            break;
        case choiceNumber === 1:
            computerChoice = 'PAPER';
            break;
        case choiceNumber === 2:
            computerChoice = 'SCISSORS';
            break;
    }
    return computerChoice;
    
}


let computerScore = 0;
let playerScore = 0;

function playRound(playerSelection, computerSelection) {
    let playerChoice = prompt('Rock, Paper or Scissors?', '');
        playerSelection = playerChoice.toUpperCase();
        computerSelection = computerPlay();
    let result;
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        result = 'You Lose! Paper beats Rock';
        computerScore += 1;
        console.log(result);
        console.log(playerScore, computerScore);
        return { result, computerScore };
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {    
        result = 'You Win! Rock beats Scissors';
        playerScore += 1;
        console.log(result);
        console.log(playerScore, computerScore);
        return { result, playerScore };
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {     
        result = 'You Win! Paper beats Rock';
        playerScore += 1;
        console.log(result);
        console.log(playerScore, computerScore);
        return { result, playerScore };
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        result = 'You Lose! Scissors beats Paper';
        computerScore += 1;
        console.log(result);
        console.log(playerScore, computerScore);
        return { result, computerScore };
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        result = 'You Lose! Rock beats Scissors';
        computerScore += 1;
        console.log(result);
        console.log(playerScore, computerScore);
        return { result, computerScore };
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        result = 'You Win! Scissors beats Paper';
        playerScore += 1;
        console.log(result);
        console.log(playerScore, computerScore);
        return { result, playerScore };
    }
    else { 
        result = 'It\'s a tie!';
        console.log(result);
        console.log(playerScore, computerScore);
        return { result, computerScore, playerScore };
    } 
}

function game() {
    let score;
    for (let i = 0; i < 5; i++) {
        playRound();
    }
    if (playerScore > computerScore) {
        return score = 'Congratulations, you win!';
    }
    else {
        return score = 'You lose, better luck next time';
    }

}

console.log()
console.log(game());
