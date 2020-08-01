/*
1. Generate a secret word
    - make an array of prewritten secret words and have a function pick one each round

2. Have the user guess letters

3. Have the guessed letters checked against the letters in the secret word
    - if they're in there, fill them in the blank boxes
    - if they're not, add them to the wrong letters array

4. Trigger a win event if the user guesses all the letters

5. Trigger a loss event if the user guesses eight wrong letters

*/

const wordArray = ['modem', 'matrix', 'wireframe', 'bandwidth', 'giraffe', 'octopus', 'martini', 'hexagon', 'xylophone', 'delta', 'ultramarine', 'zeitgeist', 'rook', 'xenon', 'xerox', 'megabyte', 'enterprise', 'elemental', 'oppenheimer', 'caffeine', 'adrenaline', 'firewall', 'zeppelin', 'phreak', 'touchtone', 'jupiter', 'quarrel', 'vespertine']


console.log(wordArray.length);