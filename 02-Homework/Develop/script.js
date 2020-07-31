var wantPass = confirm("Would you like to generate a new password?");
if (wantPass === true) {
  alert("Press the red button to generate a poassword.");
}


// Assignment Code
var generateBtn = document.querySelector("#generate");
var newPassword = writePassword;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  