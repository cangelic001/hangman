
const words = ["cow", "pig", "cat", "elk", "fox", "rat", "bee", "ant", "owl", "cod"];
let guessedLetters = [];
let display = "" ; // a string, to replace the current word paragraph in HTML 
const currentWord = document.getElementById("current-word");

// logic is there are 2 variables to match: guessed letter, to be matched with the word selected from the word bank, selectedWord
// guessed letter --> (whatever is inside a button) --> if correct, push it inside an array
// do a function which checks if the word contains the guessed letter. use includes() and if. if it is inside, push guessed letter into guessed letters array.
// then need a function, replace whatever is inside the current word with the correct letter + "_"
// loop thru the selectedWord one by one, update display if the letter in the selected word is in 

const maxWrongGuesses = 10;

startGame();

function startGame() {
    selectedWord = "cat";
    guessedLetters = [];
    changeWord();
    setupButtons();
};

// use selected word length, do loop for each letter in the word.
function changeWord() {

    for (let i = 0, i < selectedWord.length; i++) {
        let letter = selectedWord[i];
        if (guessedLetters.includes(letter)) {
            display += letter; // to do: put display to replace the paragraph in p with the id="alphabet-buttons"
        } else {
            display += "_";
        }
    }

    currentWord.textContent = display;
};

function checkLetter(event) {
    let guessedLetter = event.target.textContent;

    if (selectedWord.includes(guessedLetter)) {
        guessedLetters.push(guessedLetter);
        changeWord(); 
    } 
};

function setupButtons() {
    let buttons = document.querySelectorAll("#alphabet-buttons button");
    buttons.forEach(function(button) { 
        button.addEventListener("click", checkLetter())
      });
};


