// the game variables
let min = 1,
    max = 10,
    winningNumber = getRandomNumber(max, min),
    guessLeft = 3;

// the UI variables

const game = document.querySelector('.game');
const guessInput = document.querySelector('#guess-input');
const maxNum = document.querySelector('.max-num');
const minNum = document.querySelector('.min-num');
const guessBtn = document.querySelector('#guess-btn');
const message = document.querySelector('.message');

// Assign UI min and max

minNum.textContent = min;
maxNum.textContent = max;

//geting the play again function

game.addEventListener('mousedown', function (e) {

    if (e.target.className === 'play-again') {
        window.location.reload();
    }

});

// listerning for user input

guessBtn.addEventListener('click', function () {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        showMessage(`Please Enter a number between ${min} and ${max}`, 'red');
    } else {



        if (guess === winningNumber) {

            gameOver(true, `${winningNumber} is correct, YOU WON !!!!`);
        } else {

            guessLeft -= 1;

            if (guessLeft === 0) {
                gameOver(false, `Game Over You lost, the correct number was ${winningNumber}`);

            } else {

                guessInput.style.borderColor = 'red';
                guessInput.value = '';

                //show message
                showMessage(`${guess} is not correct, ${guessLeft}, Guess Left`, 'red');
            }

        }
    }
});

//function to show message

function showMessage(msg, color) {
    message.style.color = color;
    message.textContent = msg;
}

//control error

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    //disable input
    guessInput.disabled = true;

    // change the border color

    guessInput.style.borderColor = color;

    // set the winner message
    message.style.color = color;

    showMessage(msg);

    guessBtn.value = 'Play Again';
    guessBtn.className += 'play-again';
}

//get the random winning number

function getRandomNumber(max, min) {
    return Math.floor(Math.random() * (max) - (min) + min);
}