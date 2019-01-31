const buttons = document.querySelectorAll('button');
const outcome = document.querySelector('#outcome');
const rounds = document.querySelector('#rounds');
const win = document.querySelector('#win');
const lose = document.querySelector('#lose');

let lifes = 5;
let wins = 0;
let loses = 0;

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = button.id;
        let compSelection = compSelect();
        playRound(playerSelection, compSelection);
        rounds.textContent = `Lifes: ${lifes}`;
        win.textContent = `Wins: ${wins}`;
        lose.textContent = `Loses: ${loses}`;
        if (lifes === 0) {
            if (wins > loses) {
                outcome.textContent = 'Congratulations, you won the match!';
            } else if (loses > wins) {
                outcome.textContent = 'You have lost the match!';
            } else {
                outcome.textContent = 'The match was drawn!';
            }
            lifes = 5;
            wins = 0;
            loses = 0;
        }
    });
  });

function compSelect() {
    let compPlay = ['rock', 'paper', 'scissors'];
    let compMove = compPlay[Math.floor(Math.random()*compPlay.length)];
    return compMove;
}

function playRound(pMove, cMove) {
    if (pMove === 'rock') {
        switch (cMove) {
            case 'rock':
                outcome.textContent = 'Computer played Rock, it was a tie!'
            break;
            case 'paper':
                outcome.textContent = 'Computer played Paper, you lost!'
                loses += 1;
                lifes -= 1;
            break;
            case 'scissors':
                outcome.textContent = 'Computer played Scissors, you won!'
                wins += 1;
            break;
        }
    } else if (pMove === 'paper') {
        switch (cMove) {
            case 'paper':
                outcome.textContent = 'Computer played Paper, it was a tie!'
            break;
            case 'scissors':
                outcome.textContent = 'Computer played Scissors, you lost!'
                loses += 1;
                lifes -= 1;
            break;
            case 'rock':
                outcome.textContent = 'Computer played Rock, you won!'
                wins += 1;
            break;
        }
    } else if (pMove === 'scissors') {
        switch (cMove) {
            case 'scissors':
                outcome.textContent = 'Computer played Scissors, it was a tie!'
            break;
            case 'rock':
                outcome.textContent = 'Computer played Rock, you lost!'
                loses += 1;
                lifes -= 1;
            break;
            case 'paper':
                outcome.textContent = 'Computer played Paper, you won!'
                wins += 1;
            break;
        }
    }

    return;
    
}