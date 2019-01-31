const buttons = document.querySelectorAll('button');
const outcome = document.querySelector('#outcome');

buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        let playerSelection = button.id;
        let compSelection = compSelect();
        playRound(playerSelection, compSelection);
    });
  });
  
function playRound(pMove, cMove) {
    if (pMove === 'rock') {
        switch (cMove) {
            case 'rock':
                outcome.textContent = 'Computer played Rock, it was a tie!'
            break;
            case 'paper':
                outcome.textContent = 'Computer played Paper, you lost!'
            break;
            case 'scissors':
                outcome.textContent = 'Computer played Scissors, you won!'
            break;
        }
    } else if (pMove === 'paper') {
        switch (cMove) {
            case 'paper':
                outcome.textContent = 'Computer played Paper, it was a tie!'
            break;
            case 'scissors':
                outcome.textContent = 'Computer played Scissors, you lost!'
            break;
            case 'rock':
                outcome.textContent = 'Computer played Rock, you won!'
            break;
        }
    } else if (pMove === 'scissors') {
        switch (cMove) {
            case 'scissors':
                outcome.textContent = 'Computer played Scissors, it was a tie!'
            break;
            case 'rock':
                outcome.textContent = 'Computer played Rock, you lost!'
            break;
            case 'paper':
                outcome.textContent = 'Computer played Paper, you won!'
            break;
        }
    }

    return;
    
}

function compSelect() {
    let compPlay = ['rock', 'paper', 'scissors'];
    let compMove = compPlay[Math.floor(Math.random()*compPlay.length)];
    return compMove;
}