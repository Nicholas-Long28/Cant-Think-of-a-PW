// Assignment Code
var generateBtn = document.querySelector("#generate");

// Set constant variables to choose from for the pw//
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "~`!@#$%^&*()-_=+;:?<>".split("");
var passlength;
let passwordOptions = [];

//Set Prompts and an input for password length//
function generatePassword() {
  var password = ""; 
  var passwordlength = prompt("How many characters in your password?")
  if (passwordlength >= 8 && passwordlength <= 128) {
    var passwordupper = confirm("Would you like a password with uppercase letters");
    var passwordlower = confirm("Would you like a password with lowercase letters");
    var passwordnumbers = confirm("Would you like a password with numbers");
    var passwordsymbols = confirm("Would you like a password with special characters");
    
    //Booleans for pw output//
    if (passwordupper) {
      passwordOptions.push(uppercase);

    } if (passwordlower) {
      passwordOptions.push(lowercase);

    } if (passwordnumbers) {
      passwordOptions.push(numbers);
      
    } if (passwordsymbols) {
      passwordOptions.push(symbols);
    }
    
    }
  for(var i = 0; i < passwordlength; i++){
    // var that contains random char from passwordOptions 
    var randomChar = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    console.log(randomChar);
    // pick a random char from passwordOptions and add it to the password variable 
    password = password + randomChar 
  }
  console.log(password);
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