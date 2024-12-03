/*  Santas Emoji Hack!

During Christmas, Santa wants to ban negative emojis, so when people
use negative emoji shortcodes, he wants positive emojis to appear instead.

In other words, :angry: should result in 🎁 instead of 😠.


*/

const hackedEmojis = {
    "angry":            "🎁",   // 😠
    "thumbsdown":       "👏",   // 👎  
    "man_facepalming":  "🎅",   // 🤦‍♂️
    "cry":              "‍😄",   // 😭
    "puke":             "🤩"    // 🤮
}


/* 1. Write a function that checks if a lowercase word starts and 
ends with a colon. If it does, check if it exists in the hackedEmojis object, 
and replace it with the corresponding emoji. If not, return the original word.


Example input: ":cry:"
Example output: ‍😄

*/ 
function emojifyWord(word){
    if (word[0] === ":" && word[word.length - 1] === ":") {
        const emoji = word.slice(1, word.length - 1);

        if (emoji in hackedEmojis) {
            switch (emoji) {
                case "angry": return "🎁";
                case "thumbsdown": return "👏";
                case "man_facepalming": return "🎅";
                case "cry": return "‍😄";
                case "puke": return "🤩";
            }
        }
    }

    return word;
}

console.log(emojifyWord(":angry:"));


/* 2. Write a function to find any emoji shortcodes in a phrase.
Use your emojify function from the previous exercise!

Example input: "Just read your article :thumbsdown:"
Example output: "Just read your article 👏"
*/ 

function emojifyPhrase(phrase){
    const newPhrase = [];
    const words = phrase.split(" ");

    for (const word of words) {
        newPhrase.push(emojifyWord(word));
    }

    return newPhrase.join(" ");
}

console.log(emojifyPhrase("Those shoes :puke:"));


// Stretch goal: don't just replace the shortcodes, but also 
// any emojis are added directly to the text.


