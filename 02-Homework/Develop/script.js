var wantPass = confirm("Would you like to generate a new password?");
if (wantPass === true) {
  alert("Press the red button to generate a password.");
}

// Special characters for the function created
var generateButton = document.getElementById('generateBtn');
generateButton.addEventListener('click', writePassword);

// Assignment Code
var generateBtn = document.querySelector("#generate");


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

var useUpperCase = prompt("Would you like to use upper case letters in your password?");
var useLowerCase = prompt("Would you like to use lower case letters in your password?");
var useNumbers = prompt("Would you like to use numbers in your password?");
var useSpecial = prompt("Would you like to use special characters in your password?");

if (useUpperCase === true || useLowerCase === true || useNumbers === true || useSpecial === true)

