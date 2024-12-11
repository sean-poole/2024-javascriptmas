const emojis = ['🎄', '🎁', '🎅', '☃️']; // Your set of emojis

const gameBoard = document.getElementById("game-board");

document.getElementById("btn").addEventListener("click", () => {
  gameBoard.innerHTML = "";
  createCardRow();
  createCardRow();
  Array.from(document.querySelectorAll(".revealed")).forEach(emoji => emoji.classList.remove("revealed"));
});

function createCardRow() {
  const shuffleEmojis = emojis.sort(() => Math.random() - 0.5);

  for (let emoji of shuffleEmojis) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("hide");
    card.textContent = emoji;
    gameBoard.appendChild(card);
  }
}

gameBoard.addEventListener("click", (event) => {
  if (event.target.classList.contains("card") &&
     !event.target.classList.contains("revealed")) {
    handleCardClick(event.target);
  }
});

let searchForMatchFlag = false;
let evaluating = false;
let firstElement = "";
let secondElement = "";

function handleCardClick(card) {
  if (evaluating) return;

  card.classList.add("revealed");
  
  if (!searchForMatchFlag) {
    firstElement = card;
    searchForMatchFlag = true;
  } else {
    secondElement = card;
    compareEmojis(firstElement, secondElement);
    searchForMatchFlag = false;
  }
}

function compareEmojis(firstElement, secondElement) {
  evaluating = true;

  if (firstElement.textContent !== secondElement.textContent) {
    setTimeout(() => {
      if (document.body.contains(firstElement) &&
          document.body.contains(secondElement)) {
            firstElement.classList.remove("revealed");
            secondElement.classList.remove("revealed");
      }

      resetCards();
    }, 2000);
  } else {
    resetCards();
  }
}

function resetCards() {
  firstElement = null;
  secondElement = null;
  evaluating = false;
}


/**
 *🎄 Requirements:
 * - This is a classic "Find the Pair" game with a christmas theme.
 * - The player should be able to reveal cards by clicking on them.
 * - When the player reveals one card, it should stay revealed until a second card is revealed.
 * - When the player reveals two cards:
 *   - If they are the same, they should remain revealed for the rest of the game.
 *   - If they are different, they should be flipped back to hidden.
 * - The cards should be shuffled at the start of each game.
 */

/**
 * 🎅 Stretch Goals:
 * - Add a point system where points are awarded for each correctly revealed pair 
 *   and deducted for each incorrect pair (you decide the exact points for each action).
 * - Implement a high-score system using the browser's local storage.
 * - Add a "Restart Game" button that appears when the game ends so the user can start over.
 */
  