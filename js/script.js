function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


window.onload = function() {

  function buttonClicked(argButtonName) {
    clearMessages();
    console.log(argButtonName + ' został kliknięty');
    const playerMove = argButtonName;
    console.log('ruch gracza to: ' + playerMove);
    const randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('wylosowana liczba to: ' + randomNumber);
    const computerMove = getMoveName(randomNumber);
    console.log('ruch komputera to: ' + computerMove);
    displayResult(playerMove, computerMove);
    printScore();
  }

  const button_rock = document.getElementById('button-rock');
  button_rock.addEventListener('click', function(){ buttonClicked('kamień'); });
  const button_paper = document.getElementById('button-paper');
  button_paper.addEventListener('click', function(){ buttonClicked('papier'); });
  const button_scissors = document.getElementById('button-scissors');
  button_scissors.addEventListener('click', function(){ buttonClicked('nożyce'); });

  function getMoveName(argMoveId) {
    console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
    if (argMoveId == 1) {
      return 'kamień';
    } if (argMoveId == 2) {
      return 'papier';
    } if (argMoveId == 3) {
      return 'nożyce';
    } 
  }

  function displayResult(argPlayerMove, argComputerMove) {
    console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
    if ((argPlayerMove == 'papier' && argComputerMove == 'kamień')||(argPlayerMove == 'kamień' && argComputerMove == 'nożyce')||(argPlayerMove == 'nożyce' && argComputerMove == 'papier')) {
      printMessage('Wygrywasz!');
      playerScore = playerScore + 1;
    } else if (argPlayerMove == argComputerMove) {
      printMessage('Remis!');
    } else {
      printMessage('Przegrywasz :(');
      computerScore = computerScore + 1;
    }
    printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
  }
}

let playerScore = 0;
let computerScore = 0;

function printScore() {
  console.log('Wynik gracza: ' + playerScore);
  console.log('Wynik komputera: ' + computerScore);
  document.getElementById('player-score').innerHTML = playerScore;
  document.getElementById('computer-score').innerHTML = computerScore;
}