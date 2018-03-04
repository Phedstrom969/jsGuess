function guessingGame(){

  alert("Guesing Game\n\nPlayer 1 will enter a number between 1-100. " +
        "Player 2 will try to guess the number. " +
        "When player 2 guesses the number it will display the number of guesses")

  var player1Num = setPlayer1Num();
  var player2Num = null;
  var numOfGuesses = 0;

  do {

      player2Num = setPlayer2Num();

      if (player1Num > player2Num) {
        alert("Sorry, your guess " + player2Num + " was too low. Guess higher.")
      } else if (player1Num < player2Num) {
        alert("Sorry, your guess " + player2Num + " was too high. Guess lower.")
      }

      numOfGuesses++;

  } while (player2Num != player1Num);

  alert("Congratulations you guessed Player 1's number! It took " + numOfGuesses
        + " guesses");

}

function setPlayer1Num(){

  var number = parseInt(prompt("Player 1 enter a number between 1-100 for player 2 against:", ""));

  while ((number < 1) || (number > 100)) {

      alert("Invalid number, try again.")
      number = parseInt(prompt("Player 1 enter a number between 1-100 for player 2 against:", ""));
  }

  return number;
}

function setPlayer2Num(){

  var number = parseInt(prompt("Player 2 enter your guess:"));

  while ((number < 1) || (number > 100)) {

      alert("Invalid number, try again.")
      number = parseInt(prompt("Player 2 enter your guess:", ""));
  }

  return number;
}
