// Assignment Code
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

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

//test

//var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"];



