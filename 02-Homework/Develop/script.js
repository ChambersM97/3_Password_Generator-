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
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];

// The confirms are used to determ if the generatePassword() function will include that specificed character set
var useUpperCase = confirm("Would you like to use upper case letters in your password?");
var useLowerCase = confirm("Would you like to use lower case letters in your password?");
var useNumbers = confirm("Would you like to use numbers in your password?");
var useSymbols = confirm("Would you like to use special characters in your password?");
var askCharacterLength = 0;
//var characterLength = askCharacter


// one the character length and arrays are decided, the function below
// randomizes said character length using Math.floor(Math.random())
function generatePassword() {

  for (var i = 0; i < askCharacterLength; i++) {
      if (useUpperCase === true) {

      };

      if (useLowerCase === true) {

      };

      if (useNumbers === true) {

      };

      if (useSymbols === true) {

      };

  //for (var i = 0; i < askCharacterLength; i++)
  //Document.Write !!!!
}



// else if (useUpperCase === true && useLowerCase !== true && useNumbers !== true && useSpecial !== true) {
//   if (askCharacterLength > 7 && askCharacterLength < 129) {
//     for (i = 0; i < askCharacterLength; i++) {
//       var food = ((upperCase[(Math.floor(Math.random() * upperCase.length))]));;

// if (askCharacterLength > 7 && askCharacterLength < 129) {

// } else {
//   alert("You must choose between 8-128 characters. Try again!");

// }