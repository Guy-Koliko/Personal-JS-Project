const body = document.querySelector('body');
const button = document.querySelector('.submit');
const b1 = document.querySelector('.b1');
const b2 = document.querySelector('.b2');
const b3 = document.querySelector('.b3');
const b4 = document.querySelector('.b4');


//load function
loadFunction();


function loadFunction() {
    button.addEventListener('click', changeBackground);
    b1.addEventListener('click', bOne);
    b2.addEventListener('click', bTwo);
    b3.addEventListener('click', bThree);
    b4.addEventListener('click', bFour);
}

function changeBackground() {

    body.style.backgroundColor = 'white'

}
function bOne() {

    body.style.backgroundColor = 'red'

}
function bTwo() {

    body.style.backgroundColor = 'yellow'

}
function bThree() {

    body.style.backgroundColor = 'violet'

}
function bFour() {

    body.style.backgroundColor = 'turquoise'

}