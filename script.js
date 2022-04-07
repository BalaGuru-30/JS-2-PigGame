'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelector('.show-modal');
//Getting the elements
let score0El = document.getElementById('score--0');
let score1El = document.getElementById('score--1');
let diceEl = document.querySelector('.dice');
let btnRoll = document.querySelector('.btn--roll');
let btnHold = document.querySelector('.btn--hold');
let btnNew = document.querySelector('.btn--new');
let current0El = document.getElementById('current--0');
let current1El = document.getElementById('current--1');
let Winner0El = document.getElementById('Winner--0');
let Winner1El = document.querySelector('.Winner-1');

//Setting Initial values
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');
Winner0El.classList.add('hidden');
Winner1El.classList.add('hidden');
let currentScore0 = 0;
let currentScore1 = 0;
let totalScore0 = 0;
let totalScore1 = 0;
let activePlayer = 0;

//On the click of roll a dice
btnRoll.addEventListener('click', function () {
    if (totalScore0 >= 100 || totalScore1 >= 100) {
        totalScore0 > totalScore1 ? Winner0El.classList.remove('hidden') : Winner1El.classList.remove('hidden');
    }
    else {
        switch (activePlayer) {
            case 0: {
                //Generate a random number
                let dice = Math.trunc(Math.random() * 6) + 1;
                //Display the dice image of the corresponding number
                diceEl.src = `dice-${dice}.png`;
                diceEl.classList.remove('hidden');
                //add the current score until it comes to 1
                if (dice !== 1) {
                    currentScore0 += dice;
                    current0El.textContent = currentScore0;
                }
                else {
                    currentScore0 = 0;
                    current0El.textContent = currentScore0;
                    activePlayer = 1;
                }
                break;
            };
            case 1: {
                //Generate a random number
                let dice = Math.trunc(Math.random() * 6) + 1;
                //Display the dice image of the corresponding number
                diceEl.src = `dice-${dice}.png`;
                diceEl.classList.remove('hidden');
                //add the current score until it comes to 1
                if (dice !== 1) {
                    currentScore1 += dice;
                    current1El.textContent = currentScore1;
                }
                else {
                    currentScore1 = 0;
                    current1El.textContent = currentScore1;
                    activePlayer = 0;
                }
                break;
            }
        }
    }

});
//On the click of hold
btnHold.addEventListener('click', function () {
    switch (activePlayer) {
        case 0: {
            totalScore0 += currentScore0;
            currentScore0 = 0;
            current0El.textContent = currentScore0;
            score0El.textContent = totalScore0;
            diceEl.classList.add('hidden');
            activePlayer = 1;
            break;
        };
        case 1: {
            totalScore1 += currentScore1;
            currentScore1 = 0;
            current1El.textContent = currentScore1;
            score1El.textContent = totalScore1;
            diceEl.classList.add('hidden');
            activePlayer = 0;
            break;
        };
    }
    if (totalScore0 >= 100 || totalScore1 >= 100) {
        totalScore0 > totalScore1 ? Winner0El.classList.remove('hidden') : Winner1El.classList.remove('hidden');
    }
});
//On the click of new game
btnNew.addEventListener('click', function () {
    diceEl.classList.add('hidden');
    totalScore0 > totalScore1 ? Winner0El.classList.add('hidden') : Winner1El.classList.add('hidden');
    currentScore0 = 0;
    currentScore1 = 0;
    totalScore0 = 0;
    totalScore1 = 0;
    score0El.textContent = totalScore0;
    score1El.textContent = totalScore1;
    current0El.textContent = currentScore0;
    current1El.textContent = currentScore1;
    activePlayer = 0;

})

//Rules of the Game


const openModal = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    // console.log(e.key);

    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
