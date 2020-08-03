var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

// Assignment Code
// Looks for id of generate and selects it
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
// once selected, this essentially tags object with an alarm clock of sorts that does the command in quotes if said object
// is interacted with.
generateBtn.addEventListener("click", writePassword);

// THIS IS WHEN THE BUTTON IS CLICKED.

//allows satrts making password
// Write password to the #password input

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  function generatePassword() {
    var useUpperCase = confirm("Would you like to use upper case letters in your password?");
    var useLowerCase = confirm("Would you like to use lower case letters in your password?");
    var useNumbers = confirm("Would you like to use numbers in your password?");
    var useSpecial = confirm("Would you like to use special characters in your password?");
    var characterLength = askCharacterLength;
  
    //for (var i = 0; i < characterLength; i++)
    if (useUpperCase === true || useLowerCase === true || useNumbers === true || useSpecial === true) {
      var askCharacterLength = prompt("Between 8-128, Choose how many characters you want in your password");
    } else {
      alert("You must pick at least one category! Try again.");
      generatePassword();
    }
      if (useUpperCase === true && useLowerCase === true && useNumbers === true && useSpecial === true) {
        if (characterLength > 7 && characterLength < 129) {
        
      } else {
        alert("You must choose between 8-128 characters. Try again!");
      }
  
  } else if (useUpperCase === true && useLowerCase !== true && useNumbers !== true && useSpecial !== true) {
        if (askCharacterLength > 7 && askCharacterLength < 129) {
          var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
          alert("hi");
      } else {
        alert("You must choose between 8-128 characters. Try again!");
      }
  
  } else if (useUpperCase === true && useLowerCase === true && useNumbers !== true && useSpecial !== true) {
        if (characterLength > 7 && characterLength < 129) {
  
      } else {
        alert("You must choose between 8-128 characters. Try again!");
      }
  
  } else if (useUpperCase === true && useLowerCase === true && useNumbers === true && useSpecial !== true) {
        if (characterLength > 7 && characterLength < 129) {
  
      } else {
        alert("You must choose between 8-128 characters. Try again!");
      }
  
  } else if (useUpperCase !== true && useLowerCase === true && useNumbers !== true && useSpecial !== true) {
        if (characterLength > 7 && characterLength < 129) {
  
      } else {
        alert("You must choose between 8-128 characters. Try again!");
      }
  
  } else if (useUpperCase !== true && useLowerCase === true && useNumbers === true && useSpecial !== true) {
        if (characterLength > 7 && characterLength < 129) {
  
      } else {
          alert("You must choose between 8-128 characters. Try again!");
        }
  
  } else if (useUpperCase !== true && useLowerCase === true && useNumbers === true && useSpecial === true) {
  
        if (characterLength > 7 && characterLength < 129) {
  
      } else {
          alert("You must choose between 8-128 characters. Try again!");
        }
  
  } else if (useUpperCase !== true && useLowerCase !== true && useNumbers === true && useSpecial !== true) {
        if (characterLength > 7 && characterLength < 129) {
  
      } else {
          alert("You must choose between 8-128 characters. Try again!");
        }
  
  } else if (useUpperCase !== true && useLowerCase !== true && useNumbers === true && useSpecial === true) {
        if (characterLength > 7 && characterLength < 129) {
  
      } else {
          alert("You must choose between 8-128 characters. Try again!");
        }
  
  } else if (useUpperCase !== true && useLowerCase !== true && useNumbers !== true && useSpecial === true){;
    }   if (characterLength > 7 && characterLength < 129) {
  
      }
  
    }
  
}

//var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
//var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
//var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
//var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"]; 

