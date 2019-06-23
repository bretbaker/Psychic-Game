// opening alert welcoming user to our game
// alert("Welcome to the Psychic Game! Please read the instructions to play!");

// generate computer's choice
let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let randNum = Math.floor(Math.random() * 26);
let compChoice = alphabet[randNum];