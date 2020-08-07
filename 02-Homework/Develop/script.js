// Looks for id of generate and selects it
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
// once selected, this essentially tags object with an alarm clock of sorts that does the command in quotes if said object
// is interacted with.

generateBtn.addEventListener("click", writePassword);

// THIS IS WHEN THE BUTTON IS CLICKED.


// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


// we establish the arrays for all the characters we need, seperating them by id
//conditionals
var lowerUpperNumbersSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"0", "1", "2", "3", "4", "5", "6", "7", "8", "9",
"!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var lowerUpperSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
"!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var lowerUpperNumbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", 
"V", "W", "X", "Y", "Z","0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerNumbersSymbols = []

var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9",];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var upperLowerCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// The confirms are used to determ if the generatePassword() function will include that specificed character set
var useLowerCase = confirm("Would you like to use upper case letters in your password?");
var useUpperCase = confirm("Would you like to use lower case letters in your password?");
var useNumbers = confirm("Would you like to use numbers in your password?");
var useSymbols = confirm("Would you like to use special characters in your password?");
var askCharacterLength = parseInt(prompt("Well... How many characters would you like to have in your password! (must be between 8 and 128)"));



// one the character length and arrays are decided, the function below
// randomizes said character length using Math.floor(Math.random())

function generatePassword() {
 
  var endPassword = " ";

  for (var i = 0; i < askCharacterLength; i++) {

    if (useLowerCase === true && useUpperCase === true && useNumbers === true && useSymbols == true) {

      endPassword += ((lowerUpperNumbersSymbols[(Math.floor(Math.random() * lowerUpperNumbersSymbols.length))]));
    }

    else if (useLowerCase === true && useUpperCase === true && useSymbols === true) {
      endPassword += ((lowerUpperSymbols[(Math.floor(Math.random() * lowerUpperSymbols.length))]));
    }

    else if (useLowerCase === true && useUpperCase === true && useNumbers === true) {

      endPassword += ((lowerUpperNumbers[(Math.floor(Math.random() * lowerUpperNumbers.length))]));

    } else if (useLowerCase === true && useNumbers === true && useSymbols === true) {

      endPassword += ((lowerCase[(Math.floor(Math.random() * lowerCase.length))]));

    }; //else if (useUpperCase === true) {

      //endPassword += ((upperCase[(Math.floor(Math.random() * upperCase.length))]));
    

    //if (useSymbols === true) {

      //endPassword += ((symbols[(Math.floor(Math.random() * symbols.length))]));
    //};


    //if (useNumbers === true ) {

      //endPassword += ((numbers[(Math.floor(Math.random() * numbers.length))]));
    //};


    

  

  }
  return endPassword;
}
