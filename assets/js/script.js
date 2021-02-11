// Assignment code here


const specialCharacters = "!@#$%^&*()";

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  }

// Prompts 
function generatePassword() {
  var passwordLength = prompt("Please enter the number of characters. Must be no less than 8 and no more than 128.");

  var special = confirm("Do you want special characters in your password?");

  var numbers = confirm("Do you want numbers in your password?");

  var lowerCases = confirm("Do you want lowercases in your password?");

  var upperCases = confirm("Do you want uppercases in your password?");


  // minimum count for numbers, lowerCases, upperCases & specialCharacters
  var minimumCount = 0;
  
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

  if (lowerCases === true) {
    minimumLowerCases = functionArray.getLowerCases();
    minimumCount++;
  }

  if (upperCases === true) {
    minimumUpperCases = functionArray.getUpperCases();
    minimumCount++;
  }

  // empty string variable for the for loop below
  var randomPasswordGenerated = "";
  
  // loop getting random characters
  for (let i = 0; i < (parseInt(passwordLength) - minimumCount); i++) {
    var randomNumberPicked = Math.floor(Math.random() * 4);

    randomPasswordGenerated += randomNumberPicked;

  }
  
  // add characters to the password
  randomPasswordGenerated += minimumNumbers;
  randomPasswordGenerated += minimumLowerCases;
  randomPasswordGenerated += minimumUpperCases;
  randomPasswordGenerated += minimumSpecialCharacters;

  return randomPasswordGenerated;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





