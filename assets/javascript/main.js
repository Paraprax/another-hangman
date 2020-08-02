/*

2. Have the user guess letters

3. Have the guessed letters checked against the letters in the secret word
    - if they're in there, fill them in the blank boxes
    - if they're not, add them to the wrong letters array

4. Trigger a win event if the user guesses all the letters

5. Trigger a loss event if the user guesses eight wrong letters

*/

// initial vars:
const passwordArray = ['modem', 'matrix', 'wireframe', 'bandwidth', 'giraffe', 'octopus', 'martini', 'hexagon', 'xylophone', 'delta', 'ultramarine', 'zeitgeist', 'rook', 'krypton', 'xerox', 'megabyte', 'enterprise', 'nautilus', 'oppenheimer', 'caffeine', 'adrenaline', 'firewall', 'zeppelin', 'phreak', 'touchtone', 'jupiter', 'quartet', 'vespertine', 'zeroes', 'flux', 'dialup', 'quaver'];
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let password = "";
let blanks = [];
let userInput = "";
let verifiedGuess = "";
let wordsFound = 0;

// main game logic:
const newRound = () => {
    passwordPicker();
    passwordBlanks(password);

    //listen for key hits from the user:
    document.onkeyup = (event) => {

        userInput = (event.key).toUpperCase();

        //only run if they pressed an actual letter:
        if (alphabet.indexOf(userInput) != (-1)) {
            
            userGuess = userInput;
            console.log(`index:` + alphabet.indexOf(userInput));
        }
    }
}

// function to choose one password from the array per round:
const passwordPicker = () => {
    password = passwordArray[Math.floor(Math.random() * 32)];
}

// function to keep updating the html to match the game data:
const screenUpdater = () => {
    document.getElementById('overridden').innerHTML = wordsFound;
}

//
const passwordBlanks = (word) => {
    for (var i = 0; i < word.length; i++) {
        blanks.push(" _ ");
    }
    document.getElementById('password-blanks').innerHTML = blanks;
}

//newRound is first called on page load:
newRound();