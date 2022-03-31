// Assignment Code
var generateBtn = document.querySelector("#generate");

var userChoice = {
  alphaLower: "abcdefghijklmnopqrstuvwxyz",
  alphaUpper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  numbers: "0123456789",
  symbols: "!@#$%^&*_-+=",
}

function generatePassword() {
  var password = "password";
  // TODO: add code to generate the password here

  // Length of password
  var userLength = prompt("How many characters would you like your password to be?")

  if (userLength < 8 || userLength > 128) {
    (password.length = userLength);
  } else {
    return;
  }

  // Want to use lowercase letters?

  var userLower = Math.floor(Math.random() * userChoice.alphaLower.length);

  if ()
  



  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
