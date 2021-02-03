// Importing 'prompt' for user input (but comment out if you don't need it)
const prompt = require("readline-sync").question;


const seperator = "\n--------------------------------------\n";


function printIntroduction() {
    console.log("\nWelcome to the Academy Anagram Game! 👋 ");
    console.log(`\nHOW TO COMPLETE THE GAME:
    - Choose a category.
    - Unscramble the jumbled word and type out your guess.
    - If you get it wrong, not to worry, you can get a clue!
    - Guess all the words from each category!
    - However, be careful not to get too many wrong!
    - NOTE: YOU ONLY HAVE 3 LIVES!👀
    `);
};


// Main quiz game --------------------------


function playQuiz() {

};


// Exports --------------------------

module.exports = {
    playQuiz,
};