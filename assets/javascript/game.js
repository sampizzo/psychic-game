const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z"
];

let systemLetter = "";
let key = "";
let wins = 0;
let losses = 0;
let remainingGuesses = 10;
let incorrectGuesses = [];

document.addEventListener("keyup", event => {
  key = event.key.toLowerCase();
  console.log(key);
});

// choose system letter
function chooseLetter() {
  systemLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
  console.log("New system letter: " + systemLetter);
}

// reset game
function gameReset() {
  chooseLetter();
  remainingGuesses = 10;
  incorrectGuesses = [];
  // write to html
  let html =
    "<h4>Wins: " +
    wins +
    "</h4>" +
    "<h4>Losses: " +
    losses +
    "</h4>" +
    "<h4>Remaining guesses: " +
    remainingGuesses +
    "</h4>" +
    "<h4>Incorrect guesses: " +
    incorrectGuesses.toString();
  +"</h4>";
  //
  document.getElementById("game").innerHTML = html;
  //

  document.onkeyup = function() {
    if (alphabet.includes(key)) {
      console.log("Letter pressed");
      if (remainingGuesses >= 1 && key === systemLetter) {
        wins++;
        // write to html
        let html =
          "<h4>Wins: " +
          wins +
          "</h4>" +
          "<h4>Losses: " +
          losses +
          "</h4>" +
          "<h4>Remaining guesses: " +
          remainingGuesses +
          "</h4>" +
          "<h4>Incorrect guesses: " +
          incorrectGuesses.toString();
        +"</h4>";
        //
        document.getElementById("game").innerHTML = html;
        //
        console.log("Wins: " + wins);
        alert("ZOUNDS!!!  You are indeed psychic!!!");
        gameReset();
      } else if (remainingGuesses > 1) {
        remainingGuesses--;
        console.log("Remaining guesses: " + remainingGuesses);
        incorrectGuesses.push(key);
        console.log("Incorrect guesses: " + incorrectGuesses);
        // write to html
        let html =
          "<h4>Wins: " +
          wins +
          "</h4>" +
          "<h4>Losses: " +
          losses +
          "</h4>" +
          "<h4>Remaining guesses: " +
          remainingGuesses +
          "</h4>" +
          "<h4>Incorrect guesses: " +
          incorrectGuesses.toString();
        +"</h4>";
        //
        document.getElementById("game").innerHTML = html;
        //
      } else {
        remainingGuesses = 0;
        losses++;
        console.log("Losses: " + losses);
        // write to html
        let html =
          "<h4>Wins: " +
          wins +
          "</h4>" +
          "<h4>Losses: " +
          losses +
          "</h4>" +
          "<h4>Remaining guesses: " +
          remainingGuesses +
          "</h4>" +
          "<h4>Incorrect guesses: " +
          incorrectGuesses.toString();
        +"</h4>";
        //
        document.getElementById("game").innerHTML = html;
        //
        alert(
          "I'm sorry, but you are out of guesses.\nMy letter was \"" +
            systemLetter +
            '" \nPlease try again!'
        );
        gameReset();
      }
    } else {
      alert("Please guess only letters");
    }
  };
}
gameReset();
