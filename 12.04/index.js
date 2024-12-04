/*
You are going to build an app that challenges players to identify a Christmas Movie from some emoji 🍿 🎅 🎬. The players will have 3 guesses per movie.

For example, the emoji 🌇 💣 👮 ✈️ ️🔫  represent the film “Die Hard”, which everyone knows is the best Christmas movie of all time.

In data.js you have an array of Christmas movies with emoji and text for aria labels.

Your task is to build an app that meets these criteria:

- The app should present the player with a set of emoji selected at random from the array in data.js. 

- The player will input their guess.

- If the player guesses correctly, the app should display a message saying "Correct!". Then, after a pause of 3 seconds, it should randomly select the next set of emoji clues and display them to the player.

- If the player’s guess is incorrect, the app should display a message saying “Incorrect! You have 2 more guesses remaining.”

- If the player fails to guess correctly on the next two attempts, the app should display a message saying, `The film was <Film Name Here>!`. After a pause of 3 seconds, it should randomly select a new set of emoji clues and display them to the player.

- When all films in the array have been used, the player should see a message saying "That's all folks!".

- Each film should only be used once. There should be no repetition. 


Stretch Goals

- Use AI to decide if an answer is correct or incorrect. For example if the correct answer is "The Polar Express" but the player inputs "Polar Express" a straight comparison of the two strings will find that the player's answer was incorrect. AI could assess if there is sufficient similarity between the strings to judge it as correct. 

- Improve the UX by disabling the form/button when the game is over and during the pause between questions.
*/

import { films } from '/data.js'

// Some useful elements
const guessInput = document.getElementById('guess-input')
const guessInputText = document.getElementById('guess-input-text')
const messageContainer = document.getElementsByClassName('message-container')[0]
const messageContainerNumber = document.getElementById('message-container-number')
const messageContainerEndGame = document.getElementsByClassName('message-container-end-game')[0]
const emojiCluesContainer = document.getElementsByClassName('emoji-clues-container')[0]
const submitButton = document.getElementById('submit')

const guesses = 3;
let seenMovies = {};
let currentQuestion = null;
let remainingGuesses = guesses;

function getNextMovie() {
  const randomNumber = Math.floor(Math.random() * films.length)

  if (seenMovies[randomNumber] || 
      (currentQuestion && Number(currentQuestion.id) === randomNumber + 1)) {
        getNextMovie();
        return;
  }

  currentQuestion = films[randomNumber];
  seenMovies[currentQuestion.id] = {
    title: currentQuestion.title,
    correctAnswer: false
  };

  emojiCluesContainer.innerHTML = currentQuestion.emoji.join(" ");
  guessInputText.value = "";
}

function checkGuess(e) {
  e.preventDefault();
  let userGuess = guessInputText.value;

  if (userGuess.toLowerCase() === currentQuestion.title.toLowerCase()) {
    seenMovies[currentQuestion.id].correctAnswer = true;
  } else if (remainingGuesses) {
    remainingGuesses--;
    messageContainerNumber.innerHTML = remainingGuesses;
  }

  if (!remainingGuesses) {
    messageContainer.style.display = "none";
    submitButton.style.display = "none";
    messageContainerEndGame.style.display = "inline-block";
  }

  if (Object.keys(seenMovies).length < films.length) {
    getNextMovie();
  } else {
    console.log("All movies have been seen.");
  }
}

guessInput.addEventListener("submit", (e) => checkGuess(e));

window.addEventListener("load", () => {
  console.log("Start game!");
  messageContainerNumber.innerHTML = remainingGuesses;
  getNextMovie();
});
