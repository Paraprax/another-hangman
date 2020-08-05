/*

5. Trigger a loss event if the user guesses eight wrong letters

*/

// initial vars:
// const passwordArray = ['modem', 'matrix', 'wireframe', 'bandwidth', 'giraffe', 'octopus', 'martini', 'hexagon', 'xylophone', 'delta', 'ultramarine', 'zeitgeist', 'rook', 'krypton', 'xerox', 'megabyte', 'enterprise', 'nautilus', 'oppenheimer', 'caffeine', 'adrenaline', 'firewall', 'zeppelin', 'phreak', 'touchtone', 'jupiter', 'quartet', 'vespertine', 'zeroes', 'flux', 'dialup', 'quaver'];
const passwordArray = ['matrix', 'hexagon', 'delta', 'krypton', 'phreak', 'jupiter', 'flux', 'dialup', 'quaver'];
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let password = "";
let blanks = [];
let guessedLetters = [];
let strikes = 0;
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
                //add the letter to the 'guessed' array and increase the # of strikes;
                guessedLetters.push(userInput);
                strikes++;
                strikeCount(strikes);
                screenUpdater();
            }
            //if whole password has been uncovered, alert WIN statement:
            if (blanks.indexOf('_') == -1) {
                setTimeout(function() { alert('Access Granted')}, 100);
            }

            //if nine strikes amassed, alert LOSS statement:
            if (strikes == 9) {
                setTimeout(function() { alert('ACCESS DENIED');}, 100);
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

//function to swap out the 'lock' tiles with 'skull' when wrong letters are guessed
const strikeCount = (strikeNumber) => {
    switch (strikeNumber) {
        case 0:
            break;
        case 1:
            document.getElementById('lock-1').innerHTML = ('<img src="./assets/images/sk-1.png" alt="lock" width="70px"></img>');
            break;
        case 2:
            document.getElementById('lock-2').innerHTML = ('<img src="./assets/images/sk-2.png" alt="lock" width="70px"></img>');
            break;
        case 3:
            document.getElementById('lock-3').innerHTML = ('<img src="./assets/images/sk-3.png" alt="lock" width="70px"></img>');
            break;
        case 4:
            document.getElementById('lock-4').innerHTML = ('<img src="./assets/images/sk-4.png" alt="lock" width="70px"></img>');
            break;
        case 5:
            document.getElementById('lock-5').innerHTML = ('<img src="./assets/images/sk-5.png" alt="lock" width="70px"></img>');
            break;
        case 6:
            document.getElementById('lock-6').innerHTML = ('<img src="./assets/images/sk-6.png" alt="lock" width="70px"></img>');
            break;
        case 7:
            document.getElementById('lock-7').innerHTML = ('<img src="./assets/images/sk-7.png" alt="lock" width="70px"></img>');
            break;
        case 8:
            document.getElementById('lock-8').innerHTML = ('<img src="./assets/images/sk-8.png" alt="lock" width="70px"></img>');
            break;
        case 9:
            document.getElementById('lock-9').innerHTML = ('<img src="./assets/images/sk-9.png" alt="lock" width="70px"></img>');
            break;
        default:
            break;
    }
}

//newRound is first called on page load:
newRound();