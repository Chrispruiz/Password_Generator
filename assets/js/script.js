// Assignment code here

var generateBtn = document.querySelector("#generate");

const specialCharacters = "!@#$%^&*()";

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  }

// Prompts 
function generatePassword() {
var length = Number(prompt("How many characters would you like your password to be? (Must be between 8-128 characters"));
while (isNaN(length) || length < 8 || length > 128) length = Number(prompt("Length must be 8-128 characters. How many characters would you like your password to be?"));

var uppers = confirm("Would you like to use uppercase letters?");
var lowers = confirm("Would you like to use lowercase letters?");
var numbers = confirm("Would you like to use numbers?");
var special = confirm("Would you like to use special characters?");

while (!uppers && !lowers && !numbers && !special) {
  alert("You must select at least one character type!");
  uppers = confirm("Would you like to use uppercase letters?");
  lowers = confirm("Would you like to use lowercase letters?");
  numbers = confirm("Would you like to use numbers?");
  special = confirm("Would you like to use special characters?");
}


  

  // minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = "0";
  
  // Empty minimums for numbers, lowerCases, upperCases & specialCharacters

  var minimumNumbers = "";
  var minimumSpecialCharacters = "";
  var minimumLowerCases = "";
  var minimumUpperCases = "";
  
  //generate function  
  var functionArray = {
      getNumbers: function() {
        return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
      },

      getSpecialCharacters: function() {
        return specialCharacters[Math.floor(Math.random() * specialCharacters.length)]
      },
  
      getLowerCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
      },
  
      getUpperCases: function() {
        return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
      },
    
    };
    
  // makes sure user selected ok for all and uses empty minimums from above

  if (numbers === true) {
    minimumNumbers = functionArray.getNumbers();
    minimumCount++;
  }

  if (special === true) {
    minimumSpecialCharacters = functionArray.getSpecialCharacters();
    minimumCount++;
  }
  if (lowers === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }

  if (uppers === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }
  
  

  // empty string variable for the loop 
  var randomPasswordGenerated = "";
  
  // loop getting random characters
  for (let i = 0; i < (parseInt(length) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);
    

    randomPasswordGenerated += randomNumberPicked;
  
  
  }
  
  // adds characters to the password
  randomPasswordGenerated += minimumSpecialCharacters;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumNumbers;

  return randomPasswordGenerated;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);