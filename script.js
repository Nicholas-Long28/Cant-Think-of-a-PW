// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers = "0123456789".split("");
const symbols = "~`!@#$%^&*()-_=+;:?<>".split("");
let passwordOptions = [];


function generatePassword() {
  var password = ""; // a
  var passwordlength = prompt("How many characters in your password?")
  if (passwordlength > 8 && passwordlength < 128) {
    var passwordupper = confirm("Would you like a password with uppercase letters", "PASSWORD");
    var passwordlower = confirm("Would you like a password with lowercase letters", "password");
    var passwordnumbers = confirm("Would you like a password with numbers", "0123456789");
    var passwordsymbols = confirm("Would you like a password with special characters", "!@#$%^&*()_+~=`");

    /*if (passwordupper == true) {
      passwordOptions.push(uppercase);
    }
    if (passwordlower == true) {
      passwordOptions.push(lowercase);
    }
    if (passwordnumbers == true) {
      passwordOptions.push(numbers);
    }
    if (passwordsymbols == true) {
      passwordOptions.push(symbols);
    }

    }
    */
    for (let i = 0; i >= passwordlength; i++) {
      console.log(passwordOptions[i]);


      // var that contains random char from passwordOptions 
      var randomChar = passwordOptions[Math.floor(Math.random() * passwordOptions.length)];

      password = password + randomChar // b 

      // ab

    // pick a random char from passwordOptions and add it to the password variable 

  
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");


  passwordText.value = password;

}
//const uppercaseRandom = Math.floor(Math.random() * uppercase.length);
console.log(random, uppercase[random]);

const lowercase = Math.floor(Math.random() * lowercase.length);
console.log(random, lowercase[random]);

const numbers = Math.floor(Math.random() * numbers.length);
console.log(random, numbers[random]);

const symbols = Math.floor(Math.random() * symbols.length);
console.log(random, symbols[random]);
}
//Add event listener to generate button
generateBtn.addEventListener("click", generatePassword);}