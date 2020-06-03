//variables for the designer

const message = document.querySelector('#message');
const name = document.querySelector('#name');
const fontColor = document.querySelector('.color-font');
const bgColor = document.querySelector('.color-bg');
const fontType = document.querySelector('.font');

let bg = new Array('red', 'white', 'green', 'blue', 'yellow', 'black');
let min = 1, max = 5;


//load all element
loadElements();

function loadElements() {
    name.addEventListener('keyup', addNames);
    bgColor.addEventListener('click', bgColors);


}

//function to add name

function addNames() {

    message.textContent = name.value.toUpperCase();
    message.style.fontstyle = 'bold'

}

function bgColors() {
    colorChanger(true, '.card');
}

fontColor.addEventListener('click', function () {
    colorChanger(false, '#message')
});

function colorChanger(check, i) {
    let min = 1, max = bg.length;
    let rbg = Math.floor(Math.random() * (max) - (min) + min);
    let bb = document.querySelector(i);

    if (check) {   //get the background color

        bb.style.backgroundColor = bg[rbg];
        bb === 'black' ? fontColor.style.color = 'white' : fontColor.style.color = 'black';


    } else {
        bb.style.color = bg[rbg];
        bb === bb.style.color ? fontColor.style.color = 'white' : fontColor.style.color = 'black';


    }


}

fontType.addEventListener('click', function () {
    const fonts = new Array('monospace', 'cursive', 'fantansy', 'Arial', 'Courier New', 'Georgia', 'Impact');

    let min = 1, max = fonts.length;
    let rbg = Math.floor(Math.random() * (max) - (min) + min);
    const bb = document.querySelector('#message');
    bb.style.fontFamily = fonts[rbg];

});

const fontMax = document.querySelector('.max-font');
const fontMin = document.querySelector('.min-font');

fontMax.addEventListener('click', function () {

    let str = name.value;
    let res = str.fontsize(100);
    message.innerHTML = res.toUpperCase();

});

fontMin.addEventListener('click', function () {
    let str = name.value;
    let res = str.fontsize(5);
    message.innerHTML = res.toUpperCase();

});
