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

//remember comma at end
var lowerNumbersSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z","0", "1",
"2", "3", "4", "5", "6", "7", "8", "9","0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var upperNumbersSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y",
 "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var lowerSymbols = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var lowerNumbers = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var lowerUpper = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

var upperSymbols = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var upperNumbers = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];

var numbersSymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")" ];
//remember comma at end
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbols = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

var upperLowerCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// The confirms are used to determ if the generatePassword() function will include that specificed character set
var useLowerCase = confirm("Would you like to use lower case letters in your password?");
var useUpperCase = confirm("Would you like to use upper case letters in your password?");
var useNumbers = confirm("Would you like to use numbers in your password?");
var useSymbols = confirm("Would you like to use symbols in your password?");
//var askCharacterLength = parseInt(prompt("Well... How many characters would you like to have in your password! (must be between 8 and 128)"));




// one the character length and arrays are decided, the function below
// randomizes said character length using Math.floor(Math.random())

function generatePassword() {
 
  var endPassword = " ";

  var askCharacterLength = parseInt(prompt("Well... How many characters would you like to have in your password! (must be between 8 and 128)"));
  if (askCharacterLength < 8 || askCharacterLength > 128){
    confirm("You must choose a different amount of characters. Refresh the browser to try again!")
    var endPassword = "Try again!"
    return endPassword;
  }
  

  for (var i = 0; i < askCharacterLength; i++) {

    if (useLowerCase === true && useUpperCase === true && useNumbers === true && useSymbols == true) {

      endPassword += ((lowerUpperNumbersSymbols[(Math.floor(Math.random() * lowerUpperNumbersSymbols.length))]));
    }

    else if (useLowerCase === true && useUpperCase === true && useSymbols === true) {

      endPassword += ((lowerUpperSymbols[(Math.floor(Math.random() * lowerUpperSymbols.length))]));

    }

    else if (useLowerCase === true && useUpperCase === true && useNumbers === true) {

      endPassword += ((lowerUpperNumbers[(Math.floor(Math.random() * lowerUpperNumbers.length))]));

    } 
    
    //this one buggy
    else if (useLowerCase === true && useNumbers === true && useSymbols === true) {

      endPassword += ((lowerNumbersSymbols[(Math.floor(Math.random() * lowerNumbersSymbols.length))]));

    }
    
    else if (useUpperCase === true && useNumbers === true && useSymbols === true) {

      endPassword += ((upperNumbersSymbols[(Math.floor(Math.random() * upperNumbersSymbols.length))]));

    }

    //buggy??
    else if (useLowerCase === true && useSymbols === true) { 

      endPassword += ((lowerSymbols[(Math.floor(Math.random() * lowerSymbols.length))]));

    }

    else if (useLowerCase === true && useNumbers === true) {

      endPassword += ((lowerNumbers[(Math.floor(Math.random() * lowerNumbers.length))]));

    }

    else if (useLowerCase === true && useUpperCase === true) {
      
      endPassword += ((lowerUpper[(Math.floor(Math.random() * lowerUpper.length))]));

    }
    //dry below
    else if (useUpperCase === true && useSymbols === true) {

      endPassword += ((upperSymbols[(Math.floor(Math.random() * upperSymbols.length))]));

    }

    else if (useUpperCase === true && useNumbers === true) {

      endPassword += ((upperNumbers[(Math.floor(Math.random() * upperNumbers.length))]));

    }

    else if (useNumbers === true && useSymbols === true) {

      endPassword += ((numbersSymbols[(Math.floor(Math.random() * numbersSymbols.length))]));

    }    

    else if (useLowerCase === true) {

      endPassword += ((lowerCase[(Math.floor(Math.random() * lowerCase.length))]));

    }

    else if (useUpperCase === true) {

      endPassword += ((upperCase[(Math.floor(Math.random() * upperCase.length))]));

    }

    else if (useNumbers === true) {

      endPassword += ((numbers[(Math.floor(Math.random() * numbers.length))]));

    }

    else if (useSymbols === true) {

      endPassword += ((symbols[(Math.floor(Math.random() * symbols.length))]));

    }



    
    
    
    
    //else if (useUpperCase === true) {

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
