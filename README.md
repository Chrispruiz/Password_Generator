# Password Generator
The purpose of the Password Generator is to create random passwords to protect sensitive data. The program generates random character types between 8 and 128 characters long.
When the user clicks the "generate a password" button, they are prompted with a series of questions and based on their response, a password will be generated in the display.

# Built With
* HTML
* CSS
* Java Script
 
 1. Added prompts within the generatePassword function so they are prompted with the following questions:
      a. Please enter the number of characters. Must be no less than 8 and no more than 128.    
        i. If number is less than 8 or greater than 128, prompted to select a number between the requested parameters.  
      b. Do you want special characters in your password?      
      c. Do you want numbers in your password?
      d. Do you want lowercases in your password?
      e. Do you want uppercases in your password? 
 2. If user does not select at least one character type, user is prompted with alert that says they must choose one.
 3. Created variable functions that generate number/character using math objects.
 4. Added if statements that responds by inputting the requested number/character into the password.
 5. Used a loop expression to get random characters.

![Screenshot](./assets/Images/webpage.png)

    
[URL of deployment](https://chrispruiz.github.io/Password_Generator/)

[GitHub Repository Link](https://github.com/Chrispruiz/Password_Generator.git)
