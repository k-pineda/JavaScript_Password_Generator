// Assignment Code
// User clicks on generate button
var generateBtn = document.querySelector("#generate");

// User is prompted to select password length
var specialCharacters = [" '!','#','$','%','&',''','(','')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',']','^','_',`{','|','}','~'"]
var userChoice= ""

// function to randomly select special characters
function getrandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUptoMax = randomNumber * max
  var randomNumberinRange = min + randomNumberUptoMax

  return Math.floor(randomNumberinRange);
}
function generatePassword(specialCharacters) {
  var randomArrayPosition = getrandomNumber(0, specialCharacters.length)

  return specialCharacters[randomArrayPosition];
}



// Write password to the #password input
function writePassword() {
  prompt("How many characters would you like your password to contain?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);