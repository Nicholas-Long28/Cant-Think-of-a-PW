// Assignment Code
var generateBtn = document.querySelector("#generate");

const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const lowercase = "abcdefghijklmnopqrstuvwxyz".split("");
const numbers =  "0123456789".split("");
const symbols =  "~`!@#$%^&*()-_=+;:?<>".split("");
console.log(uppercase);
console.log(lowercase);
console.log(numbers);
console.log(symbols);

const randomUppercase = ""
const randomLowercase = ""
const randomNumbers = ""
const randomSymbols = ""

/*function assignRandomValues() {
  randomUppercase = assignRandomValues(uppercase).value;
  randomLowercase = assignRandomValues(lowercase).value;
  randomNumbers = assignRandomValues(numbers).value;
  randomSymbols = assignRandomValues(symbols).value;
}*/

function logValues(){
  console.log(randomUppercase);
  console.log(randomLowercase);
  console.log(randomNumbers);
  console.log(randomSymbols);
}

/*assignRandomValues();
logValues();*/

function generatePassword() {
  var password = "NicholasPW123";
  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordlength = prompt("How many characters in your password?")
  var passwordupper = confirm("Would you like a password with uppercase letters", "PASSWORD");
  var passwordlower = confirm("Would you like a password with lowercase letters", "password");
  var passwordnumbers= confirm("Would you like a password with numbers", "0123456789");
  var passwordsymbols = confirm("Would you like a password with special characters", "!@#$%^&*()_+~=`");


  passwordText.value = password;

}
/*const random = Math.floor(Math.random() * uppercase.length);
console.log(random, uppercase[random]);

const random = Math.floor(Math.random() * lowercase.length);
console.log(random, lowercase[random]);

const random = Math.floor(Math.random() * numbers.length);
console.log(random, numbers[random]);

const random = Math.floor(Math.random() * symbols.length);
console.log(random, symbols[random]);*/

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



/*if (pwlength != null) {
 (pwlength + uppercase + lowercase + numbers + symbols)
  document.getElementById("password").innerHTML =
  "pwlength + uppercase + lowercase + numbers + symbols";
}*/