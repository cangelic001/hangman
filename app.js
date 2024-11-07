const words = ["cow", "pig", "cat", "elk", "fox", "rat", "bee", "ant", "owl", "cod"];
let guessedLetters = [];
let currentWord = document.getElementById("current-word");

const maxWrongGuesses = 10;

startGame();

// to start the game
function startGame() {
    selectedWord = "cat";
    guessedLetters = [];
    changeWord();
    setupButtons();
};

// use selected word length, do loop for each letter in the word.
function changeWord() {
    let display = "" ; 

    for (let i = 0; i < selectedWord.length; i++) {
        let letter = selectedWord[i];
        if (guessedLetters.includes(letter)) {
            display += letter; // to do: put display to replace the paragraph in p with the id="alphabet-buttons"
        } else {
            display += "_";
        }
    }

    currentWord.textContent = display;
};

// to check if letter inputted matches the one in the word
function checkLetter(event) {
    let guessedLetter = event.target.textContent.toLowerCase();

    if (selectedWord.includes(guessedLetter)) {
        guessedLetters.push(guessedLetter);
        changeWord(); 
    } 
};

// make the buttons work
function setupButtons() {
    let buttons = document.querySelectorAll("#alphabet-buttons button");
    buttons.forEach(function(button) { 
        button.addEventListener("click", checkLetter)
    });
};
