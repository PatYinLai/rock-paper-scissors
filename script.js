let user = prompt("Best out of 5 games. Please enter rock, paper, or scissors");
let computer = Math.floor(Math.random()*3); 
  
if (computer === 0){
  computer = 'rock';
} else if (computer === 1) {
  computer = 'scissors'; 
  } else {
    computer = 'paper';
  }


for (let i = 0; i < 5; i++) {
  if (user === computer) {
    console.log(`You and the computer both used ${user}. This game is a draw`);
  } else if (user === 'rock' && computer === 'scissors') {
    console.log('You have used rock while the computer used scissors. You win!');} 
    else if (user === 'scissors' && computer == 'paper') {
    console.log('You have used scissors while the computer used paper. You win!');
  } else if (user === 'paper' && computer == 'rock') {
    console.log('You have used paper while the computer used rock. You win!');
  } else {
    console.log(`You have used ${user} and the computer has used ${computer}. You lose!`);
  }
}
