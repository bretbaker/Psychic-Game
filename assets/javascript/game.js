// opening alert welcoming user to our game
// alert("Welcome to the Psychic Game! Please read the instructions to play!");

// generate computer's choice
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let randNum = Math.floor(Math.random() * 26);
let compChoice = () => {
    return alphabet[randNum];
}
console.log(compChoice());

// record user input & compare computer's choice against user's choice and display results
let userChoice;
let userChoices = [];
let winTally = 0;
let guessesLeft = 9;
let lossTally = 0;

document.onkeyup = (event) => {
    userChoice = event.key;
    userChoice = userChoice.toLowerCase();
    userChoices.push(userChoice);
    console.log(userChoices);
    document.getElementById("guessTally").innerHTML = "Your guesses so far: " + userChoices.join(", ");
}



