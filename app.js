const words = ["cow", "pig", "cat", "elk", "fox", "rat", "bee", "ant", "owl", "cod"];
let guessedLetters = [];
let currentWord = document.getElementById("current-word");
let hangmanStatus = document.getElementById("hangman-status");
let gameMessage = document.getElementById("game-message");
let imageContainer = document.getElementById("image-container");
let winLoseMessage = document.getElementById("win-lose-message");
let showLetters = document.getElementById("show-letters");
let wrongGuesses = 0;
let display = "" ;

const maxWrongGuesses = 5;

startGame();

// to start the game
function startGame() {
    
    selectedWord = words[Math.floor(Math.random() * words.length)]; 
    console.log(selectedWord);

    gameMessage.textContent = "";
    winLoseMessage.textContent = "";
    imageContainer.innerHTML = "";

    changeWord();
    setupButtons();

    wrongGuesses = 0;
    hangmanStatus.textContent = "Wrong Attempt(s): " + wrongGuesses;

    guessedLetters = [];
    showLetters.textContent = "Letter(s) inputted :" ;
};

// use selected word length, do loop for each letter in the word.
function changeWord() {
    display = "" ;

    for (let i = 0; i < selectedWord.length; i++) { 
        let letter = selectedWord[i];
        if (guessedLetters.includes(letter)) {
            display += letter; 
        } else {
            display += "_";
        }
    }

    currentWord.textContent = display;
    
    checkWinLose(display);
};

// to check if letter inputted matches the one in the word
function checkLetter(event) {
    let guessedLetter = event.target.textContent.toLowerCase();

    if (selectedWord.includes(guessedLetter)) {
        guessedLetters.push(guessedLetter);
        changeWord(); 
        gameMessage.textContent = "Good Guess!"
        showLetters.textContent = "Letters inputted : " + guessedLetters.join(", ");
        imageContainer.innerHTML = ""
    } 
    else {
        wrongGuesses = wrongGuesses + 1;
        hangmanStatus.textContent = "Wrong Attempt(s): " + wrongGuesses;
        gameMessage.textContent = "Letter Does Not Exist in the Word!"
        guessedLetters.push(guessedLetter);
        showLetters.textContent = "Letter(s) inputted : " + guessedLetters.join(", ");

        replaceImage();

        checkWinLose(display);
    }
};

function checkWinLose(display) {
    if (!display.includes("_")) {
        winLoseMessage.innerHTML = "You Win! <br>Click on the Restart Button Below";
        imageContainer.innerHTML= "";
    } else if (wrongGuesses === maxWrongGuesses) {
        winLoseMessage.innerHTML = "You Lost! The word was " + selectedWord + "!<br>Press the Restart Game Button Below";
    }
};

// make the buttons work
function setupButtons() {
    let buttons = document.querySelectorAll("#alphabet-buttons button");
    buttons.forEach(function(button) { 
        button.addEventListener("click", checkLetter)
    });
};

// change the image 
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