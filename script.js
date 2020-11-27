let userChoice;

function assignRock() {
  userChoice = "rock";
  playGame();
}

function assignPaper() {
  userChoice = "paper";
  playGame();
}

function assignScissors() {
  userChoice = "scissors";
  playGame();
}

function pause() {
  document.getElementById("result").innerHTML = "...";
  document.getElementById("yours").innerHTML = "...";
  document.getElementById("computers").innerHTML = "...";
}

function playGame() {
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
    result = "it's a tie"; //   document.getElementById('result').innerHTML= 'it\'s a tie';  // is it equal? then it's a tie
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
}
