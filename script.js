// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "~`!@#$%^&*()-_=+;:?<>".split("");
var passlength;
let passwordOptions = [uppercase, lowercase, numbers, symbols];


function generatePassword() {
  var password = ""; // a
  var passwordlength = prompt("How many characters in your password?")
  if (passwordlength > 8 && passwordlength < 128) {
    var passwordupper = confirm("Would you like a password with uppercase letters", "PASSWORD");
    var passwordlower = confirm("Would you like a password with lowercase letters", "password");
    var passwordnumbers = confirm("Would you like a password with numbers", "0123456789");
    var passwordsymbols = confirm("Would you like a password with special characters", "!@#$%^&*()_+~=`");
    
    
    if (passwordupper === null || passwordupper === "") {
      passwordOptions.push(uppercase);

    }else if (passwordlower === null || passwordlower === "") {
      passwordOptions.push(lowercase);

    }else if (passwordnumbers === null || passwordnumbers === "") {
      passwordOptions.push(numbers);
      
    }else if (passwordsymbols === null || passwordsymbols === "") {
      passwordOptions.push(symbols);
    }
    console.log(passwordOptions);
    
  }
  for(var i = 0; i < passwordlength; i++){
    // var that contains random char from passwordOptions 
    var randomChar = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];
    password = passwordlength + randomChar // b 
  }
  console.log(randomChar);
  return password;

  }



      // ab

    // pick a random char from passwordOptions and add it to the password variable 

  
  //return password;


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);