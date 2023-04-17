// Assignment Code
// User clicks on generate button
var generateBtn = document.querySelector("#generate");

// User is prompted to select password length
var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
var specialCharacters = ["!","#","$","%","&","'","(",")","*","+",",","-",".","/",":",";","<","=",">","?","@","[","^"]
var lowercaseCharacters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
var uppercaseCharacters=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]

var userChoice= 5

// function to randomly select special characters
function getrandomNumber(min, max) {
  var randomNumber = Math.random()
  var randomNumberUptoMax = randomNumber * max
  var randomNumberinRange = min + randomNumberUptoMax

  return Math.floor(randomNumberinRange);
}
function generatePassword(array) {
  var randomArrayPosition = getrandomNumber(0, array.length)

  return array[randomArrayPosition];
}

var computerChoice = generatePassword(numericCharacters);
console.log (computerChoice);
var computerChoice2 = generatePassword (specialCharacters);
console.log (computerChoice2);
var computerChoice3 = generatePassword(lowercaseCharacters);
console.log (computerChoice3);
var computerChoice4 = generatePassword(uppercaseCharacters);
console.log (computerChoice4)

// Write password to the #password input
function writePassword() {
  prompt("How many characters would you like your password to contain?");
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);