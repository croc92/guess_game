'use strict';

let randomNumber = Math.floor(Math.random() * 100) + 1;
// console.log(randomNumber);
let score = 6;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {

    let userGuess = Number(document.querySelector('.guess').value);
    // console.log(userGuess, typeof userGuess);
    document.querySelector('.guess').value = '';
    document.querySelector('.message').style.color = 'yellow';

    // when there's no input
    if (!userGuess) {
        document.querySelector('.message').textContent = 'No Number Input!';
    }
    // when the input is wrong
    else if (userGuess !== randomNumber) {

        if (score > 1) {
            document.querySelector('.message').textContent = userGuess > randomNumber ? 'that\'s too high' : 'that\'s too low';
            score--;
            document.querySelector('.score').textContent = score;
            document.querySelector('.score').style.color = 'yellow';
        } else {
            document.querySelector('.message').textContent = 'You LOST!';
            score = 0
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = 'red';
            document.querySelector('.number').textContent = randomNumber;
            document.querySelector('.message').style.color = '';
            document.querySelector('.score').style.color = '';
        }

    }

    // // when the input is higher
    // else if (userGuess > randomNumber) {

    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'high';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You LOST!';
    //         score = 0
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('body').style.backgroundColor = 'red';
    //         document.querySelector('.number').textContent = randomNumber;

    //     }

    // }
    // // when the input is lower
    // else if (userGuess < randomNumber) {
    //     if (score > 1) {
    //         document.querySelector('.message').textContent = 'low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'You LOST!';
    //         score = 0
    //         document.querySelector('.score').textContent = score;
    //         document.querySelector('body').style.backgroundColor = 'red';
    //         document.querySelector('.number').textContent = randomNumber;
    //     }

    // }
    // when the input is right
    else {
        document.querySelector('.message').textContent = 'Bingo! You WON!';
        document.querySelector('.message').style.color = '';
        document.querySelector('body').style.backgroundColor = 'green';
        document.querySelector('.number').textContent = randomNumber;
        document.querySelector('.score').style.color = '';
        if (score > highscore) {
            document.querySelector('.highscore').textContent = score;
        }

    }

});

// reset everything except the highscore when the start-over button is clicked
document.querySelector('.start-over').addEventListener('click', function () {

    score = 6;
    randomNumber = Math.floor(Math.random() * 100) + 1;
    // console.log(randomNumber);
    document.querySelector('.message').textContent = 'start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '';
    document.querySelector('.score').textContent = score;
})
