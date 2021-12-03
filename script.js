const scissors = document.querySelector ('.scissors');
const paper = document.querySelector('.paper');
const rock = document.querySelector('.rock');
const displayUserSelection = document.querySelector('.user-choice');
const displayComputerSelection = document.querySelector('.cat-choice');
const displayResults = document.querySelector('.result');
let userSelection = '';
let computerSelection = '';
let userScore = 0;
let computerScore = 0; 

//Generate computers selection 
function computerAction() {
    let computerOptions = ['scissors','paper', 'rock'];
    computerSelection = computerOptions[Math.floor(Math.random()*3)];
    if (computerSelection === 'scissors') {
        displayComputerSelection.innerHTML = "<img src=\"img/catscissors.png\">"
    }  else if (computerSelection === 'rock') {
        displayComputerSelection.innerHTML =  "<img src=\"img/catrock.png\">"
    } else {
        displayComputerSelection.innerHTML =  "<img src=\"img/catpaper.png\">"
    }
    return computerSelection;
} 

//Generate users selection and plays a game 
scissors.addEventListener("click", () => {
    userSelection = 'scissors'; 
    displayUserSelection.innerHTML = "<img src=\"img/scissorsresult.jpg\">";
    startGame();
})

paper.addEventListener("click", () => {
    userSelection = 'paper'; 
    displayUserSelection.innerHTML = "<img src=\"img/paperresult.jpg\">";
    startGame();
})

rock.addEventListener("click", () => {
    userSelection = 'rock'; 
    displayUserSelection.innerHTML = "<img src=\"img/rockresult.jpg\">";
    startGame();
})

//Check if there is a winner. if so, declare the winner. 

function checkWinner () {
    if (userScore === 5 || computerScore === 5) {
        declareWinner()
    };
}

function declareWinner () {
    if (userScore > computerScore) {
        alert('You have won your cat!');
        userScore = 0;
        computerScore =0;
    } else {
        alert('You have lost to your cat!')
        userScore = 0;
        computerScore =0;
    }
}


//Game Logic

function startGame () {
    computerAction();
    if (userSelection === computerSelection) {
        displayResults.innerHTML = `<h2> CURRENT SCORE: ${computerScore} vs ${userScore} </h2>`;
        checkWinner();
      
    } else if (userSelection === 'rock' && computerSelection === 'scissors') {
        userScore += 1;
        displayResults.innerHTML = `<h2> CURRENT SCORE: ${computerScore} vs ${userScore} </h2>`;
        checkWinner();
     } else if (userSelection === 'scissors' && computerSelection === 'paper') {
        userScore += 1;
        displayResults.innerHTML = `<h2> CURRENT SCORE: ${computerScore} vs ${userScore} </h2>`;
        checkWinner();
    
     } else if (userSelection === 'paper' && computerSelection === 'rock') {
        userScore += 1;
        displayResults.innerHTML = `<h2> CURRENT SCORE: ${computerScore} vs ${userScore} </h2>`;
        checkWinner();
    
    } else {
        computerScore += 1;
        displayResults.innerHTML = `<h2> CURRENT SCORE: ${computerScore} vs ${userScore} </h2>`;
        checkWinner();
        }
     };
    





