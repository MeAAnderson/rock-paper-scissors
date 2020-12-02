function playGame(){
  let countUserWins = 0;
  let countComputerWins = 0;
}
function assignRock() {
  playRound("rock");
}

function assignPaper() {
  playRound("paper");
}

function assignScissors() {
  playRound("scissors");
}

function pause() {
  document.getElementById("result").innerHTML = "...";
  document.getElementById("yours").innerHTML = "...";
  document.getElementById("computers").innerHTML = "...";
}

function playRound(userChoice){
  let computerChoice = Math.floor(Math.random() * 3); //get random number from computer

  if (computerChoice === 0) {
    //assign name to randomly generated number
    computerChoice = "rock";
  } else if (computerChoice === 1) {
    computerChoice = "paper";
  } else {
    computerChoice = "scissors";
  }

  document.getElementById("yours").innerHTML = "you chose " + userChoice;
  document.getElementById("computers").innerHTML =
    "the computer chose " + computerChoice;

  let result;

  if (userChoice === computerChoice) {
    result = "it's a tie";
    document.getElementById("result").style.backgroundColor = "cyan";
  } else {
    //if not equal, find out who wins
    //    let result;
    switch (
      userChoice //decide which choice wins
    ) {
      case "paper":
        result = computerChoice === "rock" ? "you win" : "you lose";
        break;

      case "rock":
        result = computerChoice === "scissors" ? "you win" : "you lose";
        break;

      case "scissors":
        result = computerChoice === "paper" ? "you win" : "you lose";
        break;
    }
  }
  document.getElementById("result").innerHTML = result;
  document.getElementById("yours").style.visibility = "visible";
  document.getElementById("computers").style.visibility = "visible";
  document.getElementById("result").style.visibility = "visible";

  updateCount(result);
}
function updateCount(result){
  let countUserWins = parseInt(document.getElementById('user-count').innerHTML);
  let countComputerWins = parseInt(document.getElementById('computer-count').innerHTML);
  if (result === 'you win'){
    countUserWins += 1
    document.getElementById('user-count').innerHTML = countUserWins
    document.getElementById("result").style.backgroundColor = 'greenyellow'
  } else if (result === 'you lose'){
    countComputerWins += 1
    document.getElementById('computer-count').innerHTML = countComputerWins
    document.getElementById("result").style.backgroundColor = 'tomato'
  }
  
}