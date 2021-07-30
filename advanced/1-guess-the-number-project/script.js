let randomNumber = Math.floor(Math.random() * 100 + 1);
let gamepPlay = true;
let gameOver = false;
let triesAllowed = 7;
let triesTaken = 0;
let numberOfTries;

function guessNumber() {
  //Collect input from the user
  let guess = document.querySelector(".inputs-Values").value;
  const print = document.querySelector(".final-output");
  const triesUsed = document.querySelector(".Tries-output");
  if (guess === "" || guess > 100 || guess <= 0) {
    print.innerText = "Please enter a number between 1 and 100";
  } else if (guess > randomNumber) {
    triesAllowed -= 1;
    triesTaken += 1;
    print.innerText = "Number is too high, try again";
    numberOfTries = triesUsed.innerText = `Number of tries:  ${triesAllowed}`;
  }
  //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"

  //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)

  //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)

  //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
  //Your code here
  //Reset randomNumber
  //Reset users input field
  //Reset tries, and triesTaken by the user
}

//keyboard exception
function keyBoardEvents(e) {
  if (e.keyCode === 13) {
    guessNumber();
  }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
