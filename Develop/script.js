// Assignment Code
// Step 1: User clicks on generate button
// onclick alert was added to html 
var generateButton = document.querySelector("#generate");

// Step 2: User is prompted to select
prompt("How many characters would you like your password to contain?")

// Step 3: User confirms to include special characters 
confirm("Click Ok to confirm including special characters.")
var specialCharacters = [" '!','#','$','%','&',''','(','')','*','+',',','-','.','/',':',';','<','=','>','?','@','[','\',']','^','_',`{','|','}','~'"]

// Step 4: User confirms to include numeric characters 
confirm("Click Ok to confirm including numeric characters.")
var numericCharacters = ["'0','1','2','3','4','5','6','7','8','9'"]

// Step 5: User confirms to include lowercase characters 
confirm("Click Ok to confirm including lowercase characters.")
var lowercaseCharacters = ["'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'"]

// Step 6: User confirms to include uppercase characters 
confirm("Click Ok to confirm including uppercase characters.")
var uppercaseCharacters=["'A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'"]





// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateButton.addEventListener("click", writePassword);