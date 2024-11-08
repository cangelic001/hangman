const words = ["cow", "pig", "cat", "elk", "fox", "rat", "bee", "ant", "owl", "cod"];
let guessedLetters = [];
let currentWord = document.getElementById("current-word");
let hangmanStatus = document.getElementById("hangman-status");
let gameMessage = document.getElementById("game-message");
let imageContainer = document.getElementById("image-container");
let winLoseMessage = document.getElementById("win-lose-message");
let showLetters = document.getElementById("show-letters");
let wrongGuesses = 0

const maxWrongGuesses = 5;

startGame();

// to start the game
function startGame() {
    // gameMessage = ""
    winLoseMessage.textContent = ""
    selectedWord = words[Math.floor(Math.random() * words.length)];
    guessedLetters = [];
    changeWord();
    setupButtons();
    // showLetters = "";
    // imageContainer.innerHTML = "";
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

    if (!display.includes("_")) {
        winLoseMessage.textContent = "You Win!";
    }
};

// to check if letter inputted matches the one in the word
function checkLetter(event) {
    let guessedLetter = event.target.textContent.toLowerCase();

    if (selectedWord.includes(guessedLetter)) {
        guessedLetters.push(guessedLetter);
        changeWord(); 
        gameMessage.textContent = "Good Guess!"
        showLetters.textContent = "Letters inputted : " + guessedLetters.join(", ");
    } 
    else {
        wrongGuesses = wrongGuesses + 1;
        hangmanStatus.textContent = "Wrong Attempts: " + wrongGuesses;
        gameMessage.textContent = "Letter Does Not Exist in the Word!"
        guessedLetters.push(guessedLetter);
        showLetters.textContent = "Letters inputted : " + guessedLetters.join(", ");

        replaceImage(); // ----Added

        if (wrongGuesses === maxWrongGuesses) {
            winLoseMessage.innerHTML = "You Lost! The word was " + selectedWord + "!<br>Press the Restart Game Button Below";
            // startGame();
        }
    }
};

// make the buttons work
function setupButtons() {
    let buttons = document.querySelectorAll("#alphabet-buttons button");
    buttons.forEach(function(button) { 
        button.addEventListener("click", checkLetter)
    });
};

function replaceImage() {
    const image = document.createElement("img");
    
    imageContainer.innerHTML = "";

    switch (wrongGuesses) {
        case 1:
            image.src = "images/wrong1.jpg";
            image.alt = "1 wrong answer";
            break;
        case 2:
            image.src = "images/wrong2.jpg";
            image.alt = "2 wrong answers";
            break;
        case 3:
            image.src = "images/wrong3.jpg";
            image.alt = "3 wrong answers";
            break;
        case 4:
            image.src = "images/wrong4.jpg";
            image.alt = "4 wrong answers";
            break;
        case 5:
            image.src = "images/wrong5.jpg";
            image.alt = "5 wrong answers";
            break;
    }

    imageContainer.appendChild(image);
};