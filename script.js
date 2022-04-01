// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = " ";
var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";
var candidates = " ";
var length = 0;
// var includeLower = false;
// var includeUpper = false;
// var includeSpecial = false;
// var includeNumber = false;
var letter = " ";


function generatePassword() {
  var password = "password";
  // TODO: add code to generate the password here

  // Length of password
  userLength = prompt("How many characters would you like your password to be?")

  if (userLength < 8 || userLength > 128) {
    alert("Password must be between 8 and 128 characters");
    return " ";
  } else {
    length = userLength;
  }

  // Want to use lowercase letters?
 var includeLower = confirm("Would you like to use lower case letters?")

  if (includeLower === true) {
    candidates = candidates + alphaLower;
  }

  // Want to use uppercase letters?
  var includeUpper = confirm("Would you like to use lower case letters?")

  if (includeUpper === true) {
     candidates = candidates + alphaUpper;
   }

  // Want to use special characters? 
   var includeSpecial = confirm("Would you like to use special characters?")

   if (includeSpecial === true) {
     candidates = candidates + symbols;
   }

   // Want to use Numbers?
   var includeNumber = confirm("Would you like to inculde numbers?")

   if (includeNumber === true) {
     candidates = candidates + numbers;
   }



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


