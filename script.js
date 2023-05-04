// Assignment Code targeting the red button 
var generateBtn = document.querySelector("#generate");
var choices;


var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var symbols = ["^", "!", "$", "%", "&", "|", "[", "]", "(", ")", "{", "}", ":", ";", ".", "*", "+", "_", "#", "@", "<", ">", "~"];

function generatePassword() {
  //1. prompt the user for the password criteria
  //  a. password lenght 8 < 128
  const pwdLenght = prompt("Enter number of characters. Please choose between 8 and 128");
  if (pwdLenght < 8 || pwdLenght > 128) {
    alert("Please choose between 8 and 128");
    prompt("Enter number of characters. Please choose between 8 and 128");
  }
  //  b. lowercase, uppercase, numbers, special characters
  const low = confirm("Click OK if you want lowercase characters");
  const up = confirm("Click OK if you want uppercase characters");
  const number = confirm("Click OK if you want numeric characters");
  const symbol = confirm("Click OK if you want symbols");

  //2. validate the input
  if (low && up && number && symbol) {
    choices = lowercase.concat(uppercase, numbers, symbols)
  }
  else if (low && up && number) {
    choices = lowercase.concat(uppercase, number)
  }
  else if (low && up && symbol) {
    choices = lowercase.concat(uppercase, symbols)
  }
  else if (up && number && symbol) {
    choices = uppercase.concat(numbers, symbols)
  }

  var password = [];
  //3. generate password  base on the criteria
  for (var i = 0; i < pwdLenght; i++) {
    var generate = choices[Math.floor(Math.random() * choices.length)];
    password.push(generate);
  }

  //4. display password to the page
  //  a. change the user input to strings
  var generatedPwd = password.join("");
  return generatedPwd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button; will call write password function
generateBtn.addEventListener("click", writePassword);

