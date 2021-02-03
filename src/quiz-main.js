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


function createCategories() {
    return {
        "CONTINENT": ["EUROPE", "ASIA", "AFRICA", "NORTH AMERICA", "SOUTH AMERICA", "ANTARTICA", "OCEANIA"],
        "COLOUR": ["RED", "BLUE", "GREEN", "PINK", "PURPLE"],
        "SPORT": ["TENNIS", "BASKETBALL", "FOOTBALL", "VOLLEYBALL", "HOCKEY"],
        "UK CITY": ["LONDON", "BIRMINGHAM", "MANCHESTER", "LIVERPOOL", "YORK"],
        "CODING LANGUAGE": ["PYTHON", "JAVASCRIPT", "JAVA", "TYPESCRIPT", "RUBY", "C"]
    };
};


function displayQuestion(categoryName, jumble) {
    console.log(seperator);
    console.log(`What ${categoryName.toLowerCase()} is this?`);
    console.log(jumble);
};


function sayWrong(isClueUsed, lives) {
    if (isClueUsed) {
        console.log("Wrong! Even with a clue, LOL...")
    } else {
        console.log("Wrong!");
    console.log(`Number of lives remaining: ${lives}`);
    }
}


// Ask player to select a category. Returns a tuple: chosen category name, its list of questions

function getCategoryChoice(categories) {
    const arrayOfCategoryKeys = Object.keys(categories)
    console.log("\nSelect a category out of:")
    for (let key of arrayOfCategoryKeys) {
        console.log(key);
    };
    console.log(seperator);
    let categoryName = prompt("Category choice: ").toUpperCase();
    while (isCategoryValid(categoryName, arrayOfCategoryKeys) !== true) {
        categoryName = prompt("Please select from the list above: ").toUpperCase();
        if (isCategoryValid(categoryName, arrayOfCategoryKeys)) {
            break;
        };
    }
    const category = categories[categoryName];
    delete categories[categoryName];

    return [category, categoryName]    
};


function isCategoryValid(category, keys) {
    return keys.includes(category);
};


// Play one given category, asking questions from it until completed or no lives left
// Returns a tuple of the updated counts of score and lives

function playCategory(category, categoryName, lives, score) {
    while (Object.values(category).length > 0 && lives > 0) {
        const [answer, jumble] = pickRandomQuestion(category);
        displayQuestion(categoryName, jumble);
        lives = handleGuesses(answer, lives);

        if (lives > 0) {
            score += 1;
            // dispalyUpdate(score, lives, category, categoryName);
        };
    };
    return [lives, score];
};


// Randomly selects a word from the chosen category and jumbles its letters.

function pickRandomQuestion(category) {
    const answer = category[Math.floor(Math.random() * category.length)];
    //removeAnswerFromCat(answer, category);

    let jumbledLetters = answer.split("");
    jumbledLetters = shuffleArray(jumbledLetters, category);
    const jumble = jumbledLetters.join("");
    return [answer, jumble]
};


// Durstenfeld shuffle algorithm 
// Loop added to ensure that the word is jumbled

function shuffleArray(array, category) {
    while (true) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        };
        if (category.includes(array.join(""))) {
            continue;
        } else {
            return array;
        };
    };
};



// Handle user guessing (and clue-giving) for the given question

function handleGuesses(answer, lives) {
    let isCorrectlyGuessed = false;
    let isClueUsed = false;

    while (isCorrectlyGuessed !== true && lives > 0) {
        let guess = prompt("Guess: ").toUpperCase();
        if (guess == answer) {
            isCorrectlyGuessed = true;
            console.log("Right!");
        } else {
            lives -= 1;
            sayWrong(isClueUsed, lives)
            if (lives > 0 && isClueUsed !== true) {
                isClueUsed = offerClue(answer);
            };
        };
    };
    return lives;
};


function offerClue(answer) {
    const clueChoice = prompt("Would you like a clue, yes/no: ").toLowerCase();
    if (clueChoice == "yes" || clueChoice == "y") {
        console.log(`The first letter of the word is ${answer[0]}`);
        return true;
    } else {
        return false;
    };
};


// Main quiz game --------------------------


function playQuiz() {
    let lives = 3;
    let score = 0;
    let categories = createCategories();

    printIntroduction();

    while (Object.keys(categories).length > 0 && lives > 0) {
        const [category, categoryName] = getCategoryChoice(categories);
        [lives, score] = playCategory(category, categoryName, lives, score);
    };
};


// Exports --------------------------

module.exports = {
    playQuiz,
    createCategories,
};