/*

2. Have the user guess letters

3. Have the guessed letters checked against the letters in the secret word
    - if they're in there, fill them in the blank boxes
    - if they're not, add them to the wrong letters array

4. Trigger a win event if the user guesses all the letters

5. Trigger a loss event if the user guesses eight wrong letters

*/

// initial vars:
const passwordArray = ['modem', 'matrix', 'wireframe', 'bandwidth', 'giraffe', 'octopus', 'martini', 'hexagon', 'xylophone', 'delta', 'ultramarine', 'zeitgeist', 'rook', 'xenon', 'xerox', 'megabyte', 'enterprise', 'nautilus', 'oppenheimer', 'caffeine', 'adrenaline', 'firewall', 'zeppelin', 'phreak', 'touchtone', 'jupiter', 'quarrel', 'vespertine']
let password = "";
let wordsFound = 0;

const newRound = () => {
    passwordPicker();
}

// function to choose one password from the array per round:
const passwordPicker = () => {
    password = passwordArray[Math.floor(Math.random() * 28)];
}

// function to keep updating the html to match the game data:
const screenUpdater = () => {
    document.getElementById('overridden').innerHTML = wordsFound;
}

//newRound is first called on page load:
newRound();


