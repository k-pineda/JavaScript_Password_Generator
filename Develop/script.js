// Assignment Code & Variables with password character values
var generateBtn = document.querySelector("#generate");
var numericCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "^"];
var lowercaseCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercaseCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var password = [];
// function generate a random number & random array value
function getrandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUptoMax = randomNumber * max
  var randomNumberinRange = min + randomNumberUptoMax

  return Math.floor(randomNumberinRange);
}
function getRandomValueArray(array) {
  var randomArrayPosition = getrandomNumber(0, array.length)

  return array[randomArrayPosition];
}

// index option array to get random values based on user input of length and criteria of password
function generatePassword() {
  var generatedPassword = "";
  var numberOfCharacters =prompt("How many characters would you like your password to contain?");

  if (numberOfCharacters < 8 && numberOfCharacters > 128) {
    alert("Password longer than 8 or less than 128 characters");
  }
  var userSpecialCharType = confirm("Click Ok to confirm including special characters.");

  if (userSpecialCharType) {
    password += specialCharacters
  }
  //var userNumericCharType = confirm("Click Ok to confirm including numeric characters.");

  //if (userNumericCharType) {
    //password += numericCharacters
  //}
  //var userLowercaseCharType = confirm("Click Ok to confirm including lowercase characters.");

  //if (userLowercaseCharType) {
  //  password += lowercaseCharacters
  //}
  //var userUppercaseCharType = confirm("Click Ok to confirm including uppercase characters.");

  //if (userUppercaseCharType) {
    //password += uppercaseCharacters
  //}

  for (i = 0; i === numberOfCharacters.length; i++) {
    generatePassword += getRandomValueArray(password);
  }

  console.log(generatedPassword);
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

