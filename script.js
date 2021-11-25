let userSelection ='';
let computerSelection = '';
let winCount = 0; 


function userPrompt () {
  userSelection = prompt("Best out of 5 games with the computer! Please enter rock, paper, or scissors");
  return userSelection.toLowerCase();
} 

function computerAction() {
    let computerOptions = ['rock','scissors','paper'];
    computerSelection = computerOptions[Math.floor(Math.random()*3)]
    return computerSelection;
} 


for (let i = 0; i < 5; i++) {
  computerAction();
  userPrompt();

  if (userSelection !== 'rock' && userSelection !== 'scissors' && userSelection !== 'paper' ){
    console.log ('You did not select rock, paper or scissors.');
    break;
  }
 
  if (userSelection === computerSelection) {
    console.log(`You and the computer both used ${userSelection}. This game is a draw`);
    } else if (userSelection === 'rock' && computerSelection === 'scissors') {
      winCount += 1;
      console.log(`You have used rock while the computer used scissors. You win! Your wincount is ${winCount}.`);
    
    } else if (userSelection === 'scissors' && computerSelection === 'paper') {
      winCount += 1;
      console.log(`You have used scissors while the computer used paper. You win! Your wincount is ${winCount}.`);

    } else if (userSelection === 'paper' && computerSelection === 'rock') {
      winCount += 1;
      console.log(`You have used paper while the computer used rock. You win!Your wincount is ${winCount}.`);

    } else {
      console.log(`You have used ${userSelection} and the computer has used ${computerSelection}. You lose!`);
    }
 }

 if (winCount >=3) {
   console.log(`You have won ${winCount} out of 5 times.You have beaten the computer!'`);
 } else {
   console.log(`You have won ${winCount} out of 5 times. Sorry, you have not beaten the computer.`);
 }
