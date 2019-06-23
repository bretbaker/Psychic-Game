// opening alert welcoming user to our game
// alert("Welcome to the Psychic Game! Please read the instructions to play!");

// generate computer's choice
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let randNum = () => {
    return Math.floor(Math.random() * 26);
}
let compChoice = () => {
    return alphabet[randNum()];
}

// ---------------------------------------------------------------------------------------------------------

// NEED TO TAKE CONDITIONALS' CONTENT AND CREATE FUNCTIONS WITH THEM, THEN INSERT FUNCTIONS BACK INTO THE CONDITIONALS

// ---------------------------------------------------------------------------------------------------------

// record user input & compare computer's choice against user's choice and display results
let userChoice;
let userChoices = [];
let winTally = 0;
let guessesLeft = 9;
let lossTally = 0;

document.onkeyup = (event) => {
    console.log(compChoice());
    userChoice = event.key;
    userChoice = userChoice.toLowerCase();
    userChoices.push(userChoice);
    console.log(userChoices);
    guessesLeft -= 1;
    
    if (userChoice != compChoice() && guessesLeft != 0) {
        document.getElementById("guessCount").innerHTML = "Guesses left: " + guessesLeft;
        document.getElementById("guessTally").innerHTML = "Your guesses so far: " + userChoices.join(", ");
    } else if (userChoice != compChoice() && guessesLeft === 0) {
        document.getElementById("lose").innerHTML = "Losses: " + (lossTally += 1);
        guessesLeft = 9;
        document.getElementById("guessCount").innerHTML = "Guesses left: " + guessesLeft;
        userChoices = [];
        document.getElementById("guessTally").innerHTML = "Your guesses so far: ";
    } else if (userChoice === compChoice()) {
        document.getElementById("win").innerHTML = "Wins: " + (winTally += 1);
        guessesLeft = 9;
        document.getElementById("guessCount").innerHTML = "Guesses left: " + guessesLeft;
        userChoices = [];
        document.getElementById("guessTally").innerHTML = "Your guesses so far: ";
    }
}



