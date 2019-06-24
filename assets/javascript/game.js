// --------------------------------------------
// declare all variables and functions for game
// --------------------------------------------

// generate computer choice
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let randNum = () => {
    return Math.floor(Math.random() * 26);
}
let compChoice = () => {
    return alphabet[randNum()];
}
let choiceCPU = compChoice();
compChoice();
console.log(choiceCPU);


// declare initial circumstances 
let userChoice;
let userChoices = [];
let winTally = 0;
let guessesLeft = 9;
let lossTally = 0;

// create win circumstance
let winner = () => {
    document.getElementById("win").innerHTML = "Wins: " + (winTally += 1);
    guessesLeft = 9;
    document.getElementById("guessCount").innerHTML = "Guesses left: 9";
    userChoices = [];
    document.getElementById("guessTally").innerHTML = "Your guesses so far: ";
    document.getElementById("feedback").innerHTML = "You win! Play again!";
    compChoice();
    choiceCPU = compChoice();
    console.log(choiceCPU);
}

// create lose circumstance
let loser = () => {
    document.getElementById("lose").innerHTML = "Losses: " + (lossTally += 1);
    guessesLeft = 9;
    document.getElementById("guessCount").innerHTML = "Guesses left: 9";
    userChoices = [];
    document.getElementById("guessTally").innerHTML = "Your guesses so far: ";
    document.getElementById("feedback").innerHTML = "You lose! Try again!";
    compChoice();
    choiceCPU = compChoice();
    console.log(choiceCPU);
}

// create wrong guess, not yet lost circumstance
let wrongGuess = () => {
    document.getElementById("guessCount").innerHTML = "Guesses left: " + guessesLeft;
    document.getElementById("guessTally").innerHTML = "Your guesses so far: " + userChoices.join(", ");
    document.getElementById("feedback").innerHTML = "Nice try! Keep guessing!";
}

// execute onkeyup event when user presses key
document.onkeyup = (event) => {

    userChoice = event.key;
    userChoice = userChoice.toLowerCase();
    userChoices.push(userChoice);
    console.log(userChoices);
    guessesLeft -= 1;
    
    if (userChoice != choiceCPU && guessesLeft > 0) {
        wrongGuess();
    } else if (userChoice != choiceCPU && guessesLeft === 0) {
        loser();
    } else if (userChoice === choiceCPU) {
        winner();
    }
}



