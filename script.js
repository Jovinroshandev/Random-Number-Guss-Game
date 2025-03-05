//  Selecting Elements
let inputbox    = document.getElementById('inputBox')
let result      = document.getElementById('result')
let gusscount   = document.getElementById('gusscount')
let nogusscount     = 3
// Generate Random Number 1 to 5 using Math.Random
let randomNumber = Math.floor(Math.random() * 5) + 1;

// Event Handler Function
function checkTheNumber() {
    let userGuess = parseInt(inputbox.value); // Convert input value to number

    if (userGuess === randomNumber) {
        alert('You Got it Right, Congratulations!');
    } else {
        nogusscount = nogusscount - 1;
        if (nogusscount == 0){
            alert('You are Lost!, Generated Random Number is : '+ randomNumber)
        }
        gusscount.textContent = 'Available Gusses : '+ nogusscount
    }
    // **Clear Input Box After Checking**
    inputbox.value = "";
}