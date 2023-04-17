// Assignment Code
// User clicks on generate button
var generateBtn = document.querySelector("#generate");
generateBtn.addEventListener("click",generatePassword);

// User is prompted to select password length

// function to randomly select special characters
function generatePassword(specialCharacters) {
  prompt("How many characters would you like your password to contain?");
  var includeSpecialCharacters = [" '!','#','$','%','&',''','(','')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',']','^','_',`{','|','}','~'"];
  var passwordLength = userChoice;

  for (var i=0; i<= passwordLength; i++)
  var randomNumber = Math.floor(Math.random() * specialCharacters.length);
  password += specialCharacters.substring(randomNumber,randomNumber +1);
}

var computerChoice=generatePassword;
var userChoice= 1

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
//conditional statements 
if (userChoice>=1 && computerChoice>=1) {
  writePassword ()
}

else if (userChoice<=0 && computerChoice<=0) {
  alert("Please choose at least 1 character or more")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);