// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
var useUpperCase = prompt("Would you like to use upper case letters in your password?");
var useLowerCase = prompt("Would you like to use lower case letters in your password?");
var useNumbers = prompt("Would you like to use numbers in your password?");
var useSpecial = prompt("Would you like to use special characters in your password?");

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

