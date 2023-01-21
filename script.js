// computer choice
function computerPlay() {
    let choiceNumber = Math.floor(Math.random() * 3);
    let computerChoice;
    if(choiceNumber === 1) computerChoice ="ROCK";
    else if(choiceNumber === 2) computerChoice = "PAPER";
    else computerChoice = "SCISSORS";
    return computerChoice;
}

// player and computer scores
let computerScore = 0;
let playerScore = 0;

// buttons for rock paper and scissors
const buttons = document.querySelectorAll('.choice');
//for each button play game with their id as value
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let value = button.id.toUpperCase()
        let playerSelection = value;
        let computerSelection = computerPlay();
        playRound(playerSelection, computerSelection);
    });
});

// button for playing again after someone wins
let replay = document.getElementById("replay");
replay.style.display = "none";
replay.addEventListener("click", () => {
    location.reload();
});

//playing a game
function playRound(playerSelection, computerSelection) {
    compare(playerSelection, computerSelection);
    let p1 = document.getElementById("para1");
    p1.style.display = "flex";
    if(playerScore === 5) {
        console.log("Player wins!");
        p1.innerText = "You win! Congratulations";
        replay.style.display = "block";
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none"; 
        p1.style.backgroundColor = '#fcf7c6'; 
        p1.style.color = 'rgb(137, 0, 172)';     
    }
    else if(computerScore === 5) {
        console.log("Computer wins!");
        p1.innerText = "Computer wins! Better luck next time";
        replay.style.display = "block";
        document.getElementById("rock").style.display = "none";
        document.getElementById("paper").style.display = "none";
        document.getElementById("scissors").style.display = "none";
        p1.style.backgroundColor = '#fcf7c6';
        p1.style.color = 'rgb(137, 0, 172)'; 
    }
}

let player = document.getElementById("player");
    player.innerText = `Players score:  ${playerScore}`; 
let computer = document.getElementById("computer");
    computer.innerText = `Computers score:  ${computerScore}`;

//comparing players and computers choices
function compare (playerSelection, computerSelection) {
    let result;
    if (playerSelection === 'ROCK' && computerSelection === 'PAPER') {
        result = 'You Lose! Paper beats Rock';
        computerScore++;
    }
    else if (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') {    
        result = 'You Win! Rock beats Scissors';
        playerScore++;
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'ROCK') {     
        result = 'You Win! Paper beats Rock';
        playerScore++;
    }
    else if (playerSelection === 'PAPER' && computerSelection === 'SCISSORS') {
        result = 'You Lose! Scissors beats Paper';
        computerScore++;
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'ROCK') {
        result = 'You Lose! Rock beats Scissors';
        computerScore++;
    }
    else if (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') {
        result = 'You Win! Scissors beats Paper';
        playerScore++;
    }
    else { 
        result = 'It\'s a tie!';
    }   
    let p1 = document.getElementById("para1");
    p1.innerText =  result;
    player.innerText = `Players score:  ${playerScore}`; 
    computer.innerText = `Computers score:  ${computerScore}`;
}
