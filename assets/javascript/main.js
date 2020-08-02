/*

3. Have the guessed letters checked against the letters in the secret word
    - if they're in there, fill them in the blank boxes P
    - if they're not, add them to the wrong letters array

4. Trigger a win event if the user guesses all the letters

5. Trigger a loss event if the user guesses eight wrong letters

*/

// initial vars:
// const passwordArray = ['modem', 'matrix', 'wireframe', 'bandwidth', 'giraffe', 'octopus', 'martini', 'hexagon', 'xylophone', 'delta', 'ultramarine', 'zeitgeist', 'rook', 'krypton', 'xerox', 'megabyte', 'enterprise', 'nautilus', 'oppenheimer', 'caffeine', 'adrenaline', 'firewall', 'zeppelin', 'phreak', 'touchtone', 'jupiter', 'quartet', 'vespertine', 'zeroes', 'flux', 'dialup', 'quaver'];
const passwordArray = ['matrix', 'hexagon', 'delta', 'krypton', 'phreak', 'jupiter', 'flux', 'dialup', 'quaver'];
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let password = "";
let blanks = [];
let guessedLetters = [];
let userInput = "";
let wordsFound = 0;

// main game logic:
const newRound = () => {
    passwordPicker();
    passwordBlanks(password);

    //listen for key hits from the user:
    document.onkeyup = (event) => {

        //convert input to uppercase && save as a variable to be verified:
        userInput = (event.key).toUpperCase();

        //only run if they pressed an actual letter:
        if (alphabet.indexOf(userInput) != (-1)) {
            //check if the letter is in the password:
            if (password.indexOf(userInput) != (-1)) {
                //replace the blank character at the appropriate index with the user input:
                blanks[password.indexOf(userInput)] = userInput;
                screenUpdater();
            } else {
                guessedLetters.push(userInput);
                screenUpdater();
            }
            //check if whole password has been uncovered:
            if (blanks.indexOf('_') == -1) {
                setTimeout(function() {alert('Access Granted')}, 100);
            }
        }
    }
}

// function to choose one password from the array per round:
const passwordPicker = () => {
    password = passwordArray[Math.floor(Math.random() * 9)];
    //convert to uppercase(so we don't have to remember to keep doing so manually for any future passwords added to the array):
    password = password.toUpperCase();
}

// function to keep updating the html to match the game data:
const screenUpdater = () => {
    //update the total passwords found(ie. rounds won):
    document.getElementById('overridden').innerHTML = wordsFound;
    //reprint the new partially-blank string:
    document.getElementById('password-blanks').innerHTML = blanks;
    //reprint the array of wrong answers:
    document.getElementById('guessed-letters').innerHTML = guessedLetters;
}

//
const passwordBlanks = (word) => {
    for (var i = 0; i < word.length; i++) {
        blanks.push('_');
    }
    document.getElementById('password-blanks').innerHTML = blanks;
}

//newRound is first called on page load:
newRound();