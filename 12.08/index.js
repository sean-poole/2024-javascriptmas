// The keyboard has been rendered for you
import { renderKeyboard } from '/keyboard'
document.getElementById('keyboard-container').addEventListener('click', checkGuess)

// Some useful elements
const guessContainer = document.getElementById('guess-container')
const snowmanParts = Array.from(document.getElementsByClassName("snowman-part"));

/*
Challenge  
1. Your challenge is to build a Christmas take on the classic game "Hangman" where a player attempts to guess a word by selecting letters to save a snowman from melting.
- The snowman is made up of 6 parts: hat, arm, nose, scarf, head, and body. These are separate images and have been positioned with CSS.
- At the start of the game, a player can see a number of dashes, with a dash for each letter of the word. So if the word was TREE the player would see - - - -
- The player selects a letter. 
- If that letter is in the word, that letter replaces the dash in the corresponding position. For the word "TREE", if the player has selected the letter E, they will see --EE.
- If the selected letter does not appear in the word, one part of the snowman gets removed.
- If the player guesses the entire word, they win! 
    - any removed parts of the snowman are reinstated.
    - the snowman gets sunglasses
    - the message "You Win!" is displayed in the "guess-container" div.
-If the player guesses wrong 6 times: 
    - only a puddle remains.
    - the message "You Lose!" is displayed in the "guess-container" div.
    
*** Stretch Goals *** 

- Disable the letter button once a letter has been used.
- Add a "New Game" button that appears at the end of a game and resets the app. (You will need to create an array of words to guess)
*/

const keyboardContainer = document.getElementById("keyboard-container");
const glasses = document.querySelector(".sunglasses");
const puddle = document.querySelector(".puddle");
const resetButton = document.querySelector(".reset");

const words = ["gift", "christmas", "holiday", "snowman", "tree", "santa", "elf", "ornament"];
let word = null;
let guessArr = [];
let guessesLeft = 6;

function randomWord() {
    return words[Math.floor(Math.random() * words.length)];
}

function renderGuess() {
    guessContainer.innerHTML = guessArr.map(c => `<div class="guess-char">${c}</div>`).join("");
}

function startGame() {
    word = randomWord();
    guessArr = Array(word.length).fill("-");
    guessesLeft = snowmanParts.length;

    renderGuess();
    snowmanParts.forEach(part => part.style.display = "block");
    glasses.style.display = "none";
    resetButton.style.display = "none";

    keyboardContainer.querySelectorAll("button").forEach(button => {
        button.disabled = false;
        button.classList.remove("used");
    });

}

function checkGuess() {
    const button = event.target;
    const letter = button.textContent;

    if (!letter || button.disables) return;

    button.disabled = true;
    button.classList.add("used");

    if (word.includes(letter)) {
        word.split("").forEach((char, i) => {
            if (char === letter) guessArr[i] = letter;
        });

        renderGuess();
        if (!guessArr.includes("-")) return winGame();
    } else {
        guessesLeft--;
        snowmanParts[snowmanParts.length - guessesLeft - 1].style.display = "none";

        if (guessesLeft === 0) return loseGame();
    }
}

function winGame() {
    guessContainer.innerHTML = `<div class="message">You win!</div>`;
    glasses.style.display = "block";
    snowmanParts.style.display = "block";
    resetButton.style.display = "block";
}

function loseGame() {
    guessContainer.innerHTML = `<div class="message">You lose!</div>`;
    resetButton.style.display = "block";
    puddle.style.display = "block";
}

function resetGame() {
    if (words.length > 1) {
        words.splice(words.indexOf(word), 1);
        startGame();
    } else {
        guessContainer.innerHTML = `<div class="message">No more words!</div>`;
    }
}

keyboardContainer.addEventListener("click", checkGuess);
resetButton.addEventListener("click", resetGame);

renderKeyboard();
startGame();
